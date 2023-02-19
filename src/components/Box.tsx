
export interface BoxProps {
    icon: JSX.Element,
    title: string,
    cta: string,
    ctaIcon: JSX.Element,
    href: string,
}

const Box = ({ resource }: { resource: BoxProps }) => {
    return (
        <div className="bg-white p-4 rounded-xl flex flex-col justify-between w-40 md:w-48">
            {resource.icon}
            <h4 className="text-xl my-3">{resource.title}</h4>
            <div>
                <a className="inline-flex items-center bg-babyboo-lightbrown py-1 px-4 rounded-2xl hover:opacity-75" href={resource.href}>{resource.cta} <span className="pl-2">{resource.ctaIcon}</span></a>
            </div>
        </div>
    )
}

export default Box