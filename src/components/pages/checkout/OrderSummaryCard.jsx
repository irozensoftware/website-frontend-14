"use client";

export default function OrderSummaryCard({
  isLoading,
  products,
  totalPrice,
  register,
  watch,
}) {
  const shippingCost = 15;
  const total_price = totalPrice + shippingCost;

  const paymentMethod = watch("payment_method");

  return (
    <div className="bg-gray-100 p-4 md:px-8">
      <h2 className="text-center text-xl font-semibold mb-6">YOUR ORDER</h2>

      <div className="bg-white shadow p-6">
        {/* Header */}
        <div className="flex justify-between text-base font-semibold border-b pb-2 mb-4">
          <span>PRODUCT</span>
          <span>SUBTOTAL</span>
        </div>

        {/* Products */}
        {products?.map((item, index) => (
          <div key={index} className="flex justify-between text-sm mb-4">
            <div>
              <p className="text-gray-700">{item?.name}</p>
              <p className="text-gray-500 mt-1">× {item?.quantities}</p>

              <div>
                {item?.variantInfo?.map((variant, vIndex) => (
                  <p key={vIndex} className="text-gray-500">
                    <strong>{variant?.variant_name}:</strong>{" "}
                    {variant?.attribute_name}
                  </p>
                ))}
              </div>
            </div>

            <span className="font-medium">${item?.base_price}</span>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between py-2 border-t text-base">
          <span className="font-semibold">Subtotal</span>
          <span className="text-orange-500 font-semibold">${totalPrice}</span>
        </div>

        {/* Shipping */}
        <div className="py-3 border-t text-base">
          <label className="flex justify-between items-center">
            <span>Flat rate</span>
            <span className="text-orange-500">$15.00</span>
          </label>
        </div>

        {/* Total */}
        <div className="flex justify-between py-3 border-t font-semibold text-lg">
          <span>Total</span>
          <span className="text-orange-500">${total_price}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-4 space-y-2 text-base">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="bank"
            {...register("payment_method", {
              required: "Please select a payment method",
            })}
          />
          Direct bank transfer
        </label>

        {paymentMethod === "bank" && (
          <p className="text-xs text-gray-500 bg-white p-2 rounded">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference.
          </p>
        )}

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" value="check" {...register("payment_method")} />
          Check payments
        </label>

        {paymentMethod === "check" && (
          <p className="text-xs text-gray-500 bg-white p-2 rounded">
            Please send a check to Store Name, Store Street, Store Town.
          </p>
        )}

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" value="cod" {...register("payment_method")} />
          Cash on delivery
        </label>

        {paymentMethod === "cod" && (
          <p className="text-xs text-gray-500 bg-white p-2 rounded">
            Pay with cash upon delivery.
          </p>
        )}
      </div>

      {/* Newsletter */}
      <label className="flex items-center gap-2 mt-4 text-sm">
        <input type="checkbox" {...register("newsletter")} />
        Subscribe to our Newsletter
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full cursor-pointer mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold"
      >
        {isLoading ? "Placing Order..." : "PLACE ORDER"}
      </button>
    </div>
  );
}
