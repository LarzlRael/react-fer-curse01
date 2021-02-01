import React from 'react'

export const JournalEntries = () => {
    const entries = [1, 2, 3, 4, 5];
    return (
        <div className="journal__entries">
            {
                entries.map(value => (
                    <JournalEntry key={value} />
                ))
            }
        </div>
    )
}

const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque nihil hic modi neque, eum, illo adipisci dignissimos sit corrupti optio inventore veritatis aliquam, asperiores voluptas. Ducimus ipsam repellat voluptate.</p>

            </div>

            <div className="journal__entrey-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
