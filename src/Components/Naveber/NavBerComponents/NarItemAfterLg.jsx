import { useContext, useEffect, useState } from "react"
import { CiSettings } from "react-icons/ci"
import myContext from '../../../Context/myContext'

const NarltemAfterLg =()=>{

    const {setMaterials} = useContext(myContext);

    const[top,setTop] = useState();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY > 0 ? setTop(true) : setTop(false);
    
          return ()=>{
            window.removeEventListener('scroll',()=>{
              window.scrollY > 0 ? setTop(true) : setTop(false);
            })
          }
        })
      },[])
    return(
        <> 
            <div 
            onMouseLeave={()=>{setMaterials(false)}}  
            onMouseEnter={()=> setMaterials(true) }
         className={ top ? 'hidden lg:flex xl:w-[85%] xl:mx-[9.5%] w-full absolute bg-[#F8F7F5] left-0 top-[68px]  h-[85vh] overflow-auto z-[50]' : 'hidden lg:flex xl:w-[85%] xl:mx-[9.5%] w-full absolute bg-[#F8F7F5] left-0 top-[114px] h-[85vh] overflow-auto z-[50]'}>
            <div className='w-full'>
            <div className='text-sm m-7 '>
                <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                <h1>Business Cards</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Standar Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Foil Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Folded Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Painted Edge Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Plastic Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>All Business Cards</h3>
                </div>
            </div>
            <div className=' text-sm m-7' >
                <div className='text-xl font-semibold mb-[7px]'>
                    <h1>Brochures & Flyers</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Brochures</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Flyers</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Club Flyers</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Flyers</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Leaflets</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Mini Brochures</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Mailing Brochures</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Raised Spot UV Flyers</h3>
                </div>
            </div>
            </div>
            <div className='w-full h-full'>
            <div className=' text-sm m-7 '>
                <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                <h1>Booklets & Catalogs</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Standar Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Foil Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Folded Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Painted Edge Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Plastic Business Cards</h3>
                <h3 className='hover:text-[#008338] cursor-pointer mb-2'>All Business Cards</h3>
                </div>
            </div>
            <div className=' text-sm m-7' >
                <div className='text-xl font-semibold mb-[7px]'>
                <h1>PostCards</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] mb-2'>Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Club Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Die-Cut Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Leaflets</h3>
                <h3 className='hover:text-[#008338] mb-2'>Mini Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Mailing Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Raised Spot UV Flyers</h3>
                </div>
            </div>
            </div>
            <div className='w-full h-full'>
            <div className='columns-1 text-sm m-7'>
                <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                <h1>Cards & Events</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] mb-2'>Standar Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Die-Cut Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Foil Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Folded Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Painted Edge Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Plastic Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>All Business Cards</h3>
                </div>
            </div>
            <div className='columns-1 text-sm m-7]' >
                <div className='text-xl font-semibold mb-[7px]'>
                <h1>Forms & Stationery</h1>
                </div>
                <div className='border-t pb-4'>
                <h3 className='hover:text-[#008338] mb-2'>Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Club Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Die-Cut Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Leaflets</h3>
                </div>
            </div>
            </div>
            <div className='w-full h-full'>
            <div className='columns-1 text-sm m-7'>
                <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                <h1>Advertising</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] mb-2'>Standar Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Die-Cut Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Foil Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Folded Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Painted Edge Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>Plastic Business Cards</h3>
                <h3 className='hover:text-[#008338] mb-2'>All Business Cards</h3>
                </div>
            </div>
            <div className='columns-1 text-sm m-7' >
                <div className='text-xl font-semibold mb-[7px]'>
                <h1>Restaurants</h1>
                </div>
                <div className='border-t pt-4'>
                <h3 className='hover:text-[#008338] mb-2'>Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Club Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Die-Cut Flyers</h3>
                <h3 className='hover:text-[#008338] mb-2'>Leaflets</h3>
                <h3 className='hover:text-[#008338] mb-2'>Mini Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Mailing Brochures</h3>
                <h3 className='hover:text-[#008338] mb-2'>Raised Spot UV Flyers</h3>
                </div>
            </div>
            </div>
            <div className='w-full pb-2 h-14 absolute bg-[#F8F7F5] flex justify-center items-center  -bottom-14 border-t'>
            <div className=' text-sm flex cursor-pointer justify-center items-center'> <strong className=''>Can't find what you're looking for?</strong> Try or <CiSettings className='mr-2'/> <span className='font-semibold text-[#126CBA]'>Custom Product Builder</span></div>
            </div>
        </div>
        </>
    )
}

export default NarltemAfterLg