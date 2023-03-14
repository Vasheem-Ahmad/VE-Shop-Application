import React, {useState} from 'react';
// import './ProductFilter.scss';

const sortBy = ['Relevance', 'New Arrivals', 'Price (Low to High)', 'Price (High to Low)', 'Rating', 'Discount']

const CatFilter = [
  {
    name: 'Category',
    option: ['Ayurvedic', 'Bangles & Bracelets', 'Bluetooth Headphones', 'Bluetooth Speakers', 'Caps & Hats', 'Car Covers']
  },
  {
    name: 'Gender',
    option: ['Boys', 'Girls', 'Men', 'Women']
  },
  {
    name: 'Fabric',
    option: ['Acrylic', 'Art Silk', 'Bamboo', 'Chanderi Cotton', 'Chanderi Silk', 'Chiffon']
  },
  {
    name: 'Color',
    option: ['Black', 'Blue', 'Brown', 'Gold', 'Grey', 'Maroon']
  },
  {
    name: 'Price',
    option: ['Under ₹ 149', 'Under ₹ 199', 'Under ₹ 249', 'Under ₹ 299', 'Under ₹ 349', 'Under ₹ 399']
  },
  {
    name: 'Discount',
    option: ['10% and above', '20% and above', '30% and above', '40% and above', '50% and above', 'All discounted']
  },
  {
    name: 'Rating',
    option: ['2.0 and above', '3.0 and above', '3.5 and above', '4.0 and above', '4.5 and above', 'VE Trusted']
  },
  {
    name: 'Size',
    option: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XX Large']
  },
  {
    name: 'Combo',
    option: ['Combos', 'Multipack', 'Pack of 1', 'Pack of 2', 'Pack of 3', 'Pack of 4']
  },
]

export const ProductFilter = () => {
  const [sort, setSort] = useState('');

  const handleclick = (menu) => {
    setSort();
  }

  return (
    <div className='filter-wrapper'>
      <div className='sort-by mb-3'>
        <div className="dropdown">
          <button className="d-flex align-items-center justify-content-between btn w-100 bg-white border rounded text-start p-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className='text-secondary fw-medium'>Sort by: <span className='text-body'>{sort.menu}</span></div>
          </button>
          <ul className="dropdown-menu overflow-auto shadow-sm w-100">
            {sortBy.map((menu, index) => (
              <li className={`list-items txt-secondary2 px-3 py-2 ${index === 1 ? 'active' : ''}`} key={index} onClick={handleclick}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='filter-item-cover border rounded p-3'>
        <div className='filter-header border-bottom pb-2'>
          <div className='header-label head-5 fw-medium'>FILTERS</div>
          <div className='header-sublabel title-label txt-secondary fw-medium'>1000+ Products</div>
        </div>

        <div className='filter-items'>
          <div className="accordion accordion-flush">
            {CatFilter.map((item, id) => (
              <div className="accordion-item py-3" key={id}>
                <h2 className="accordion-header p-0">
                  <button className="accordion-button collapsed head-5 fw-medium p-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded="true" aria-controls={`collapse-${id}`}>
                    {item.name}
                  </button>
                </h2>
                <div id={`collapse-${id}`} className="accordion-collapse collapse">
                  <div className="accordion-body mt-2 p-0">
                    { item.option.length > 0 ?
                      item.option.map((value, key) => (
                        <div className="form-check mb-2" key={key}>
                          <input className="form-check-input" type="checkbox" value="" id={`check-${key}`} />
                          <label className="form-check-label text-capitalize" htmlFor={`check-${key}`}>{value}</label>
                        </div>
                      )) : ''
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
