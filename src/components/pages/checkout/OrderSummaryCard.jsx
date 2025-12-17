export default function OrderSummaryCard() {
  return (
    <div className=" bg-gray-100  p-4 md:px-8   ">
      <h2 className="text-center text-xl font-semibold mb-6">YOUR ORDER</h2>

      <div className="flex items-center justify-center">
        <div className="w-full ">
          {/* Header */}
          <div className=" bg-white shadow p-6">
            <div className="flex justify-between text-base font-semibold border-b  border-gray-200 pb-2 mb-4">
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>

            {/* Product */}
            <div className="flex justify-between text-sm mb-4">
              <div className="pr-4">
                <p className="text-gray-700 leading-relaxed">
                  Rabbit Feeder 2‑1 Rabbit Food Hay Feeder for Small Pet Guinea
                  Guinea Pigs Hamster Small Animals Feeder Bowls Pet Supplies
                </p>
                <p className="text-gray-500 mt-1">ACH962 × 3</p>
              </div>
              <span className="font-medium text-black-muted">$147.06</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between py-2 border-t border-gray-200  text-base">
              <span className="font-semibold">Subtotal</span>
              <span className="text-orange-500 font-semibold">$147.06</span>
            </div>

            {/* Shipping */}
            <div className="py-3 border-t border-gray-200  text-base">
              <p className="mb-2 text-semibold">Shipping</p>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    defaultChecked
                    className="accent-orange-500 text-semibold"
                  />
                  Flat rate
                </span>
                <span className="text-orange-500 text-semibold">$15.00</span>
              </label>
            </div>

            {/* Total */}
            <div className="flex justify-between py-3 border-t border-gray-200  font-semibold text-lg">
              <span>Total</span>
              <span className="text-orange-500">$147.06</span>
            </div>
          </div>
          {/* Payment Methods */}
          <div className="mt-4 space-y-2 text-base">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" /> Direct bank transfer
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" /> Check payments
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="accent-orange-500"
              />{" "}
              Cash on delivery
            </label>
          </div>

          <p className="text-xs text-gray-500 mt-3 bg-white p-2 rounded">
           Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>

          <p className="text-xs text-gray-500 md:text-base mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>

          <label className="flex items-center  gap-2 text-sm  md:text-base mt-4">
            <input
              type="checkbox"
              defaultChecked
              className="accent-orange-500"
            />
            Subscribe to our Newsletter
          </label>

          {/* Button */}
          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
