import React from 'react';
import { NavLink } from "react-router-dom";

const FooterMenu = [
    {
        link: 'Careers',
        url: '#',
    },
    {
        link: 'Become a supplier',
        url: '#',
    },
    {
        link: 'Hall of Fame',
        url: '#',
    },
    {
        link: 'Legal and Policies',
        url: '#',
    },
    {
        link: 'Notices and Returns',
        url: '#',
    },
]

const FooterDesc = [
    {
        title: 'VEshop: Affordable Online Shopping at Your Fingertips',
        description: 'There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It easy to compare prices online and find exactly what you are looking for. And now with VEshop, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.',
    },
    {
        title: 'A Huge Selection of Products Across All Categories',
        description: 'We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, VEshop is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you are getting the best deal. Whether you are in the market for new clothes, accessories, or just some daily-use items for home, VEshop has what you need.',
    },
    {
        title: 'Women\'s Ethnic Wear Collection',
        description: 'When it comes to women\'s ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you\'re looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it\'s easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!',
    },
    {
        title: 'Western Wear for Women',
        description: 'VEshop is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, VEshop has all the latest trending outfits you\'re looking for--plus funky jewelry and accessories. You\'ll never have to worry about overspending or not being able to find something you love!',
    },
    {
        title: 'Accessories, Jewellery, and Footwear',
        description: 'You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you\'ll be sure to find the perfect accessories for any outfit!',
    },
    {
        title: 'Men\'s Ethnic Wear',
        description: 'Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men\'s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.',
    },
    {
        title: 'Men\'s Western Wear',
        description: 'Through our large selection of menswear products we offer, you\'re sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man\'s body type, and the best news of all is that they\'re all affordable. We make it easy to find exactly what you\'re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more.',
    },
    {
        title: 'Ethnic Wear for Men',
        description: 'If you\'re on the hunt for a new sherwani or any other type of Indian attire for an upcoming wedding, our latest men\'s ethnic wear collection has got you covered. We have a range of budget-friendly styles to choose from, so you\'re sure to find something that fits your needs. Whether you\'re looking for a Sherwani set, Kurta pajamas, or an ethnic jacket, we\'ve got it all!',
    },
    {
        title: 'Men\'s Accessories and Footwear',
        description: 'When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men\'s wallets, cufflinks, bags for men, and more. So don\'t waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men.',
    },
    {
        title: 'Affordable and Top Quality Beauty Products',
        description: 'With so many different cosmetics brands, products, and items to choose from, it can be overwhelming when trying to find the right makeup for you. Sometimes it\'s nice to try out new products, but if you buy bad quality makeup that breaks you out, it\'s not very cost-effective. We are only concerned with the best products. We only stock up on the best makeup and skincare that won\'t damage your skin or make you break out. We have everything from foundations, makeup removers, concealers to primer, mascara, eye shadow, and lipsticks.',
    },
]

const FooterLink = [
    {
        linkTitle: 'Home & Living',
        links: ['Curtains & Sheers', 'Round Cushions', 'Sofa Covers', 'Cotton Bedsheets', 'Bedding Sets', 'Pillow Covers', 'Decorative Items', 'Duvet Covers', 'Blankets', 'Home Temple', 'Yoga mats', 'Bean Bags', 'Single Bed Sheet', 'Cushions', 'Face Towels', 'Cotton Towel', 'Trays', 'Coasters']
    },
    {
        linkTitle: 'Men Ethnicwear',
        links: ['Men Dhoti Kurtas', 'Men Indo Western Dresses', 'Men Velvet Sherwanis', 'Men Dhotis']
    },
    {
        linkTitle: 'Women Western Wear',
        links: ['Women Frocks', 'Long Tops Women', 'Tshirt Dresses', 'Designer Gown', 'Pencil Skirts', 'Women Trousers', 'Flared Jeans', 'Women Sweatshirts', 'Shrugs', 'Capris', 'Jacket Dresses', 'Fancy Ladies Sweater', 'Chikankari Palazzos', 'Ankle Length Leggings', 'Tights', 'Printed Leggings', 'Kaftans', 'Maternity Wear']
    },
    {
        linkTitle: 'Women Ethnicwear',
        links: ['Silk Saree', 'Puff Sleeve Blouses', 'Chikankari Kurtis', 'Designer Lehenga', 'Sharara', 'Phulkari Dupatta', 'Abaya', 'Black Kurta', 'Velvet Shawls', 'Blouse Piece', 'Kurti Fabric', 'Designer Suits']
    },
    {
        linkTitle: 'Women Footwear',
        links: ['Curtains & Sheers', 'Round Cushions', 'Sofa Covers', 'Cotton Bedsheets', 'Bedding Sets', 'Pillow Covers', 'Decorative Items', 'Duvet Covers', 'Blankets', 'Home Temple', 'Yoga mats', 'Bean Bags', 'Single Bed Sheet', 'Cushions', 'Face Towels', 'Cotton Towel', 'Trays', 'Coasters']
    },
    {
        linkTitle: 'Women Accessories',
        links: ['Curtains & Sheers', 'Round Cushions', 'Sofa Covers', 'Cotton Bedsheets', 'Bedding Sets', 'Pillow Covers', 'Decorative Items', 'Duvet Covers', 'Blankets', 'Home Temple', 'Yoga mats', 'Bean Bags', 'Single Bed Sheet', 'Cushions', 'Face Towels', 'Cotton Towel', 'Trays', 'Coasters']
    },
]

export const Footer = () => {
    return (
        <footer className='bg-light py-5 mb-5 mb-lg-0'>
            <div className='container-xl'>
                <div className='row g-xl-2'>
                    <div className='col-xl-4 col-md-12 about-sec mb-4 mb-xl-0'>
                        <h1 className='head-3 mb-3'>Shop Non-Stop on VEshop</h1>
                        <div className='cmpny-desc mb-4'>Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</div>
                        <div className="app-wrapper d-flex gap-3">
                            <div className="google-play" style={{ maxWidth: 180 }}>
                                <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid" src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="google-playstore-icon" />
                                </NavLink>
                            </div>
                            <div className="app-store" style={{ maxWidth: 180 }}>
                                <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid" src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple-appstore-icon" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-5 link-sec mb-4 mb-md-0'>
                        <ul className='list p-0 m-0'>
                            {FooterMenu.map((menu, index) => (
                                <li key={index}><NavLink to="#" className='nav-link pt-1 pb-2'>{menu.link}</NavLink></li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-xl-2 col-md-3 social-sec mb-4 mb-md-0'>
                        <h1 className='head-4'>Reach out to us</h1>
                        <ul className='list d-flex flex-wrap gap-3 row-gap-1 p-0 m-0'>
                            <li><NavLink to="#" className=''><i className="bi bi-facebook" style={{ color: '#3b5998' }}></i></NavLink></li>
                            <li><NavLink to="#" className=''><i className="bi bi-instagram" style={{}}></i></NavLink></li>
                            <li><NavLink to="#" className=''><i className="bi bi-youtube" style={{ color: '#FF0000' }}></i></NavLink></li>
                            <li><NavLink to="#" className=''><i className="bi bi-linkedin" style={{ color: '#0A66C2' }}></i></NavLink></li>
                            <li><NavLink to="#" className=''><i className="bi bi-twitter" style={{ color: '#1DA1F2' }}></i></NavLink></li>
                        </ul>
                    </div>
                    <div className='col-xl-2 col-md-4 contact-sec'>
                        <h1 className='head-4'>Contact Us</h1>
                        <div className="title-label fw-medium">Fashnear Technologies Private Limited, <br />CIN: U74900KA2015PTC082263 <br />06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India <br />E-mail address: <a href="mailto:query@meesho.com" className='text-decoration-none'>query@meesho.com</a> <br />© 2015-2022 Meesho.com</div>
                    </div>
                </div>

                {/* Footer Accoedian Description */}
                <div className="footer-desc accordion mt-4 mt-md-5">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button head-4 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                More About VEshop
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body border-top">
                                {FooterDesc.map((item, id) => (
                                    <div className="accord-item mb-4" key={id}>
                                        <div className='f-title mb-2'>{item.title}</div>
                                        <div className='f-description'>{item.description}</div>
                                    </div>
                                ))}
                                <h4 className='head-5 fw-medium txt-primary'>Online Shopping</h4>
                                {FooterLink.map((linkItem, ids) => (
                                    <div className="link-section mb-3" key={ids}>
                                        <div className="head-6 fw-medium mb-1">{linkItem.linkTitle}</div>
                                        <div className="links-container d-flex flex-wrap row-gap-2">
                                            {linkItem.links.map((link, idx) => (
                                                <NavLink to="#" key={idx} className="nav-link txt-primary text-nowrap fw-medium border-end border-dark pe-2 me-2 lh-1">{link}</NavLink>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
