import React from 'react'

const ContactUsPage = () => {
  return (
    <div  className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-10'>
        <div>
            <h1 className='text-xl md:text-2xl font-bold'>Frequently Asked Questions (FAQ)</h1>
        </div>
        <div>
            <form action="" className="space-y-2">
                <div>
                  <label className="text-base" htmlFor="name">
                    Your full name  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                  Company name (optional) 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Country / Region <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                    Street address   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Town / City *  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                  State *  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   ZIP Code   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Phone  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Email address   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                 Order notes (optional) <sup  className="text-red-500">*</sup>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  ></textarea>
                </div>
                
              </form>
              
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ContactUsPage
