import ArrowIcon from "src/icons/ArrowIcon"
import HourGlass from "src/icons/HourGlass"
import { classNames } from "src/utils/classNames"

export interface Campaign {
    title: string,
    cta: string,
    imageSrc: string,
    ribbon: string,
    icon?: JSX.Element,
    href: string,
}

const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
    return (
        <div className="group w-full md:w-auto relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                    src={campaign.imageSrc}
                    alt={campaign.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 p-2 pb-4 flex flex-col absolute inset-0 justify-between ">
                <div>
                    {/* <p className={(campaign.icon != null ? "bg-babyboo-brown text-white" : "bg-babyboo-ribbon text-babyboo-dark") }>{campaign.icon ? (<span className="pr-1">{campaign.icon}</span>) : ""}{campaign.ribbon}</p> */}
                    <p className={classNames(campaign.icon ? "bg-babyboo-ribbon text-babyboo-dark" : "bg-babyboo-brown text-white", "inline-flex text-sm  p-1 px-2 rounded items-center") }>{campaign.icon ? (<span className="pr-1">{campaign.icon}</span>) : ""}{campaign.ribbon}</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold uppercase text-white mb-2">
                        {campaign.title}
                    </h3>
                    <a href={campaign.href} className="bg-babyboo-lightbrown hover:bg-babyboo text-babyboo-dark text-sm rounded-3xl px-4 py-2 inline-flex items-center">{campaign.cta} <span className="pl-2"><ArrowIcon /></span></a>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard