// lib
import React from 'react'
import { FaCircle } from 'react-icons/fa'

const Timeline = () => {
  return (
    <div className='inline-block space-y-1'>
      <div className='inline-flex items-center gap-4'>
        <FaCircle className='text-white size-4' />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          delectus nihil, repellat animi nobis doloribus, numquam hic labore aut
          nostrum magnam. Magni tempore ipsam adipisci placeat repellendus
          fugiat voluptates, consequuntur incidunt consectetur quisquam fuga.
          Porro, voluptatibus adipisci unde doloremque fugiat voluptas
          asperiores praesentium. Possimus consequuntur amet cum dolores enim.
          Iste in accusantium officia tempora voluptatum labore deserunt,
          doloremque corporis reprehenderit exercitationem natus ea accusamus
          neque quisquam fugiat nulla, est totam dolores nemo ipsam excepturi
          vero iure inventore. Reprehenderit, alias illo?
        </p>
      </div>
      <div className='min-h-16 border-l-2 ml-1 border-white' />
      <div className='inline-flex items-center gap-4'>
        <FaCircle className='text-white size-4' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          soluta sit quo voluptatem. Officia nam ipsa esse inventore vitae
          dolore placeat maxime, ex nulla praesentium tempora quae perferendis
          animi cumque!
        </p>
      </div>
    </div>
  )
}

export default Timeline
