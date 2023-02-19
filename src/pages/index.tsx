import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AddIcon from "src/icons/AddIcon";
import ArrowIcon from "src/icons/ArrowIcon";
import Chevron from "src/icons/Chevron";
import DownloadIcon from "src/icons/DownloadIcon";
import FavoritIcon from "src/icons/FavoritIcon";
import FolderIcon from "src/icons/FolderIcon";
import HourGlass from "src/icons/HourGlass";
import ImageIcon from "src/icons/ImageIcon";
import ListIcon from "src/icons/ListIcon";
import Megaphone from "src/icons/Megaphone";
import PartsIcon from "src/icons/PartsIcon";
import SomeIcon from "src/icons/SomeIcon";
import TentIcon from "src/icons/TentIcon";
import Box from "~/components/Box";
import CampaignCard, { Campaign } from "~/components/CampaignCard";
import Grouping from "~/components/Grouping";
import Heading from "~/components/Heading";
import SubHeading from "~/components/SubHeading";
import Table from "~/components/Table";
import { fetchProducts } from "~/lib/getProducts";

const campaigns: Array<Campaign> = [
  { title: "Classic senge og skabe", cta: "Gå til kampagne", imageSrc: "/images/beds.jpg", ribbon: "August 2022 - september 2022", href: "#" },
  { title: "Wally pusleborde", cta: "Gå til kampagne", imageSrc: "/images/puzzle-table.jpg", ribbon: "Oktober 2022", href: "#", icon: <HourGlass /> },
  { title: "Alle tekstiler", cta: "Gå til kampagne", imageSrc: "/images/textile.jpg", ribbon: "December 2022", href: "#", icon: <HourGlass /> }
]

const resources = [
  { icon: <TentIcon />, title: "POS bestilling", cta: "Gå til", ctaIcon: <ArrowIcon />, href: "#" },
  { icon: <ImageIcon />, title: "Billedepakke", cta: "Download", ctaIcon: <DownloadIcon />, href: "#" },
  { icon: <SomeIcon />, title: "SOME kampagne", cta: "Download", ctaIcon: <DownloadIcon />, href: "#" },
  { icon: <PartsIcon />, title: "Reservedele", cta: "Gå til", ctaIcon: <ArrowIcon />, href: "#" }
]


function index() {
  const [page, setPage] = useState(1)
  const { isLoading, data } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <Heading title="Velkommen Babybob A/S" />
      <section className="container px-4 flex self-stretch justify-between flex-wrap">
        <Grouping icon={<ListIcon />} title="Bestillingsliste" linkText="Gå til bestillingslisten" url="#">
          {isLoading ? (<div key="loading">Loading...</div>) : (
            <>
              <div className="flex justify-between">
                <p className="bg-babyboo-tag text-babyboo-dark text-sm p-1 rounded">{data?.length} produkter</p>
                <p className="bg-babyboo-tag text-babyboo-dark text-sm p-1 rounded">Total: {data!.reduce((accum, item) => accum + (item.target_og / 10), 0).toFixed(2)} DKK</p>
              </div>
              <Table rows={data!.map(product => ({
                "product": (
                  <div className="flex p-2" key={"product" + product.id}>
                    <img src={product.image_url} className="h-12 w-12 boe object-cover" alt={product.name} />
                    <div className="pl-2 text-left">
                      <h3 className="text-md">{product.name}</h3>
                      <p className="text-sm font-normal">{product.tagline}</p>
                    </div>
                  </div>
                ),
                "amount": (
                  <p key={"amount" + product.id} className="text-sm font-medium p-2">1 stk.</p>
                ),
                "discount": (
                  <p key={"discount" + product.id} className="text-sm font-medium p-2">-1%</p>
                ),
                "price": (
                  <p key={"price" + product.id} className="text-sm font-medium p-2">{(product.target_og / 10).toFixed(2)} DKK</p>
                )
              }))} />
              <div className="flex justify-center">
                <button onClick={() => setPage((prevState) => prevState += 1)} className="bg-babyboo-button hover:bg-babyboo-lightbrown text-babyboo-rose px-4 py-2 rounded-3xl inline-flex items-center">Vis alle <span className="pl-2"><Chevron /></span></button>
              </div>
            </>
          )}
        </Grouping>
        <Grouping icon={<FolderIcon />} title="Seneste ordrer" linkText="Se alle" url="#">
          {isLoading ? (<div>Loading...</div>) : (
            <Table rows={Array.from({ length: 8 }, (_, i) => i).map(i => ({
              "date": (
                <p key={"date" +i} className="font-normal">{Intl.DateTimeFormat("da-dk",).format(new Date()).replaceAll(".", "-")}</p>
              ),
              "orderId": (
                <p key={"orderId" +i} className="text-sm font-bold p-2">#{Math.floor(100000 + Math.random() * 900000)}</p>
              ),
              "see order": (
                <a key={"see-order" +i} href="#" className="text-sm font-medium p-2 underline underline-offset-1">Se ordre</a>
              ),
              "place order": (
                <a key={"place-order" +i} href="#" className="text-sm font-medium p-2 underline underline-offset-1">Genbestil</a>
              )
            }))} />
          )}
        </Grouping>
        <Grouping icon={<FavoritIcon />} title="favoritprodukter" linkText="Redigér" url="#">
          {isLoading ? (<div>Loading...</div>) : (
            <>
              {data!.slice(0, 2).map((product, index) => (
                <>
                  <div className="flex p-2 items-center justify-between" key={product.id + index}>
                    <img src={product.image_url} className="h-12 w-12 boe object-cover" alt={product.name} />
                    <div className="text-left px-4 pr-10">
                      <h3 className="text-md">{product.name}</h3>
                      <p className="text-sm font-normal">{product.tagline}</p>
                    </div>
                    <button className="bg-babyboo-button rounded-2xl px-4 py-0 h-8">
                      <span className="sr-only">Add to cart</span>
                      <AddIcon />
                    </button>
                  </div>
                </>
              ))}
            </>
          )}

        </Grouping>
      </section>
      <section className="container px-4 flex self-stretch justify-start flex-wrap py-10 gap-4">
        <SubHeading icon={<Megaphone />} title="Kampagner" />
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.title} campaign={campaign} />
        ))}
      </section>
      <section className="bg-babyboo-lightbrown">
        <div className="py-10  md:px-40 flex flex-col container">
          <h2 className="text-md md:text-xl pb-4 px-4">Dine forhandler ressourcer for <span className="font-bold">DYLAN puslepude</span></h2>
          <div className="flex justify-evenly md:justify-between flex-wrap gap-2">
            {resources.map((resource) => (<Box key={resource.title} resource={resource} />))}
          </div>
        </div>
      </section>
    </>
  );
}

export default index;