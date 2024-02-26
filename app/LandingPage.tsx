
import Image from 'next/image';


const HomePage = () => {
  const shoes = [
    {id: 1, image: '/gallery1.jpg', price: '#5,000'},
    {id: 1, image: '/gallery2.jpg', price: '#5,000'},
    {id: 1, image: '/gallery3.jpg', price: '#5,000'},
    {id: 1, image: '/gallery4.jpg', price: '#5,000'},
    {id: 1, image: '/gallery5.jpg', price: '#5,000'},
    {id: 1, image: '/gallery6.jpg', price: '#5,000'},
    {id: 1, image: '/gallery7.jpg', price: '#51,000'},
    {id: 1, image: '/gallery8.jpg', price: '#5,000'},
    {id: 1, image: '/romoved.png', price: '#2,000'},
    {id: 1, image: '/air.png', price: '#15,000'},


  ]


  return (
    <div className='container mx-auto px-4 pt-14 mt-20'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {shoes.length > 0 ? (
          shoes.map((shoe) => (
            <div key={shoe.id} className='bg-white p-4 rounded-md shadow-md relative'>
              {shoe.image ? (
                <img src={shoe.image} alt='shoe' className='w-full h-48 object-cover mb-4 bg-gray-700' />
              ) : (
                <div className='w-full h-48 flex items-center justify-center mb-4 bg-grey-200'>
                  No Image Available
                </div>
              )}
              <div className='text-grey-800 font-bold'>
                {shoe.price}
              </div>
              <button className=' absolute mr-4  bottom-0 mb-1  right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
                Details
              </button>
            </div>
          ))
        ) :(
          <div className='text-center text-gray-800'>No Shoes to Display</div>
        ) }
      </div>
        <div className='text-center mt-8 mb-0'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>
            Load More
          </button>
        </div>
        
       </div>
       
  );
};

export default HomePage;









