const Heading = (props: { title: string }) => {
    return (
        <header className="container">
            <div className="px-4 py-10">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-babyboo-dark">{props.title}</h1>
            </div>
        </header>
    )
}

export default Heading