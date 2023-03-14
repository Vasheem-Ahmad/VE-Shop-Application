import React from 'react';
import {ProductFilter} from './filter/ProductFilter';
import {Collection} from './AllProducts'

export const CollectionsAll = () => {
  return (
    <div className='collection-page my-4 my-md-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3 col-md-4'>
                    <ProductFilter />
                </div>
                <div className='col-xl-9 col-md-8 mt-4 mt-md-0'>
                    <Collection />
                </div>
            </div>
        </div>
    </div>
  )
}
