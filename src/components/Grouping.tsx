import { AppProps } from "next/app"
import { ReactElement } from "react"

interface GroupingProps {
  icon: JSX.Element,
  title: string,
  linkText: string,
  url: string,
  children: JSX.Element
}

const Grouping: React.FC<GroupingProps> = ({ icon, title, linkText, url, children }) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex justify-between pb-2 pt-4">
          <h2 className="flex justify-center items-center text-xl font-normal uppercase">
            <span className="pr-4">{icon}</span>
            {title}
          </h2>
          <a className="underline underline-offset-1" href={url}> {linkText}</a>
        </div>
        <div className="bg-babyboo p-2 rounded h-full ">
          {children}
        </div>
      </div>
    </>
  )
}

export default Grouping