function navbar(){
    return `
    <div id="leftheader">
            <div id="options">
                <i class="fa-solid fa-bars fa-2x"></i>    
            </div>
            <div id="search">
                <i class="fa-solid fa-magnifying-glass fa-2x"></i>
                <input id="searchbar" type="search">
            </div>
            
        </div>
        <div id="logo">
            <img src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
        </div>
        <div id="rightheader">
            <ul>
                <li>
                    <div>
                        <i class="fa-solid fa-location-dot fa-2x"></i>
                    </div>
                </li>
                <li>
                    <div id="user">
                        <i class="fa-solid fa-user fa-2x">
                         </i>
                        <div aria-hidden="true" id="user-div">
                            <div> <a href="login.html" >sign in</a></div>
                            <div>ORDER TRACKING</div>
                            <div>SCHEDULE DELIVERY</div>
                            <div>CB2 CREDIT CARD</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div id="whishlist">
                        <i class="fa-solid fa-heart fa-2x"></i>
                        <div aria-hidden="true" id="whishlist-div">
                            <div>SOMETHING CATCHING YOUR EYE?</div>
                            <div>
                                <span style="text-decoration: underline;">Sign in</span> to see items you may have added using another computer or device.
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="fa-solid fa-cart-shopping fa-2x"  onclick="window.location.href='cart.html'"></i>
                        <span id ="cart-count"></span>
                    </div>
                </li>
            </ul>
        </div>`
}

export default navbar