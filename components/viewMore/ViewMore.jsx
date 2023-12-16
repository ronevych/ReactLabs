// Button.jsx

import React, { useState } from 'react';
import './viewMore.css';

function ViewMoreButton() {
    const [expanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    return (
        <section className={`history ${expanded ? 'expanded' : ''}`}>
            <div className="container-history">
                <button className="viewmoreButton" onClick={handleButtonClick}>
                    {expanded ? 'Show Less' : 'View More'}
                </button>
                {expanded && (
                    <div className="history-text">
                        {/* Тут вставте текст історії */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris ut dapibus libero, vitae convallis risus. Nulla
                            facilisi. Vestibulum id massa nec elit pulvinar suscipit
                            vel at felis. Sed nec congue quam, a imperdiet nisl. 
                            {/* Продовжуйте додавати текст для досягнення бажаної кількості слів */}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris ut dapibus libero, vitae convallis risus. Nulla
                            facilisi. Vestibulum id massa nec elit pulvinar suscipit
                            vel at felis. Sed nec congue quam, a imperdiet nisl. 
                            {/* Продовжуйте додавати текст для досягнення бажаної кількості слів */}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris ut dapibus libero, vitae convallis risus. Nulla
                            facilisi. Vestibulum id massa nec elit pulvinar suscipit
                            vel at felis. Sed nec congue quam, a imperdiet nisl. 
                            {/* Продовжуйте додавати текст для досягнення бажаної кількості слів */}
                        </p>
                        {/* Додайте інші елементи, які потрібно відобразити */}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ViewMoreButton;
