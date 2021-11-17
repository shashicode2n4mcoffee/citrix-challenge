import React from 'react';
import data from '../Consts/data.json';
import './List.css';

const List = () => {
  return (
    <div className='list'>
      <h1>{data.title}</h1>
      {data.children.map((child, index) => {
        return (
          <div key={index} className='list-lvl1'>
            <h3>{child.subtitle}</h3>
            {child.categories.map((category, index) => {
              return (
                <div key={index} className='list-lvl2'>
                  <h5>{category.category}</h5>
                  {category.ajax &&
                    category.ajax.map((item, index) => {
                      return (
                        <div key={index} className='list-lvl3'>
                          <h6>{item.feature}</h6>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default List;
