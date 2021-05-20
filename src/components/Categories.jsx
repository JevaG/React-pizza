import React from 'react';

const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (id) => {
        setActiveItem(id);

    }

    console.log(setActiveItem)

    // console.log(items)
    return (
            <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : ''}
                        onClick={() => onSelectItem(null)}
                    >
                        Все
                    </li>
                        {items.map((item, id) => (
                             <li
                                 key={`${item}_${id}`}
                                 className={activeItem === item ? 'active' : ''}
                                 onClick={() => (onSelectItem(item))}
                             >
                                 {item}
                             </li>
                        ))}
                </ul>
            </div>
    );
};

export default Categories;
