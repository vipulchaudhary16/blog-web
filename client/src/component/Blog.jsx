import React from 'react'
import "../styles/Blog.css"
import { RatingStar } from './RatingStar'

export const Blog = () => {
    const blogs = [
        {
            id: "xxx",
            title: "The good time never came",
            rating: 4,
            body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, provident quia assumenda natus fuga magnam quibusdam error doloribus in nemo suscipit aperiam eaque explicabo quod, iure sit earum. Quidem ex odit rem possimus sunt optio fugiat consectetur, iusto temporibus quisquam voluptatibus sapiente inventore quaerat. Officia rerum a labore iste alias dolores architecto est illum cumque totam recusandae tempora dolor reiciendis, voluptatibus quae mollitia, excepturi adipisci magni sed perspiciatis exercitationem magnam deleniti aut? Maxime modi quidem optio reiciendis repellat! Deleniti, culpa nihil! Assumenda quidem unde ratione, non illum pariatur laudantium ut itaque amet velit consectetur provident beatae! Aliquam doloremque non perspiciatis iste, inventore explicabo suscipit fugiat corrupti vel quod! Rem odit sint fuga minus sit, enim, quasi dolorum magni veritatis consequuntur, dolorem error expedita hic reprehenderit esse impedit. Sunt quidem debitis eaque voluptatem quos saepe eum veniam esse quam maxime aut rem id magnam autem nihil a doloremque velit atque voluptatibus deleniti, quisquam iure molestias blanditiis? Impedit molestiae ut aliquam inventore facilis voluptatem error harum? Unde laudantium, voluptate quisquam quaerat magnam expedita tenetur inventore eius enim, nulla dolorem debitis, laborum optio velit at reiciendis quam corrupti! Quia praesentium ex harum voluptate at eos nulla dignissimos iste, veniam maxime unde provident ea? Maxime doloremque porro iste, sapiente quam aliquam libero qui ipsam, dolorem id, impedit maiores alias! Accusantium pariatur fugit maiores expedita quasi fugiat? Dicta tenetur repellendus perspiciatis. Exercitationem temporibus quidem autem fugit facilis voluptatum saepe necessitatibus excepturi recusandae aliquam molestias quod nam aliquid error nulla, consectetur doloribus cumque enim! Nam nemo eius sit at voluptatum earum consequuntur maiores blanditiis facilis provident architecto pariatur, omnis quam natus voluptates tenetur sunt corporis dolorum. In, quas dolores nihil doloribus hic labore vel rerum, dolor eaque aliquam modi laudantium eveniet sit atque quam illo animi rem provident sunt. Provident ab est velit veritatis voluptatibus itaque qui ratione aspernatur odit, laborum distinctio perferendis hic perspiciatis odio iure pariatur architecto. Corporis, voluptas. Natus quaerat veniam sed ducimus, odit corrupti eligendi ea, quia blanditiis rem quam hic voluptatem aperiam molestiae fuga. Nulla tempora architecto inventore. Similique culpa hic esse, dolore, saepe obcaecati illum quisquam iusto expedita quae distinctio repudiandae velit laboriosam laborum sed. Ut rerum at dicta enim repellat aliquid voluptate labore modi nulla earum, consequatur totam asperiores impedit veritatis qui autem saepe. Tempora eligendi delectus nostrum velit impedit perferendis et rerum dolorem. Iusto ullam perferendis animi quibusdam nesciunt quia maxime distinctio magni maiores saepe est rerum, quis aperiam velit dolorem vitae laboriosam in facere non hic ipsa delectus tempore! Doloremque quis sequi eos accusantium laborum voluptatum consequatur provident placeat, inventore soluta officia officiis explicabo, veniam deleniti culpa quidem vel a? Eius quam nobis itaque. Ipsum quod unde impedit at quasi voluptates numquam possimus vero porro incidunt!`,
            image: "https://wallpapers.com/images/featured/6kbwj9794wpnsfr1.jpg"
        }
    ]
    return (
        <div className='blog-container'>
            <div className="featured-blog">
                <div className="blog-header">
                    <img src={blogs[0].image} alt="" className='blog-image'/>
                    <div className="blog-header-content">
                        <h1 className='blog-title'>{blogs[0].title}</h1>
                        <div className="blog-ratting">{
                            <RatingStar rating={blogs[0].rating 
                            }/>
                        }
                            <p>1 million+ reads</p>
                        </div>
                    </div>
                </div>
                <div className="blog-body">
                    <p className="blog-text">
                        {blogs[0].body}
                    </p>
                </div>
            </div>
        </div>
    )
}
