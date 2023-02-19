import React from 'react'

const SubHeading = (props: { title: string, icon?: JSX.Element }) => {
    return (
        <header className="container">
            <div className="py-2">
                <h2 className="flex items-center text-2xl font-bold leading-tight tracking-tight text-babyboo-dark"><span className='pr-4'>{props.icon}</span>{props.title}</h2>
            </div>
        </header>
    )
}

export default SubHeading