function sidebar(){
    return ` 
     <div>
    <p>   NEW</p>
    <p onclick="window.location.href='fetchingFurnitureData.html'">FURNITURE</p>
    <li onclick="window.location.href='fetchingFurnitureData.html'" >LIVING ROOM FURNITURE</li>
    <p onclick="window.location.href='fetchingLightingData.html'">LIGHTING</p>
    <li onclick="window.location.href='fetchingLightingData.html'">VIEW ALL</li>
    <p>PILLOWS & THROWS</p>
  <li  onclick="window.location.href=fetchingPillowData.html'"  id="view">  VIEW ALL</li>
<li   onclick="window.location.href='fetchingPillowData.html'" id="pillows">PILLOWS</li>
<li onclick="window.location.href='fetchingPillowData.html'"  id="poufs">POUFS</li>
<li onclick="window.location.href='fetchingPillowData.html'" >BEST SELLERS</li>
<p>DECOR & MIRRORS</p>
    <li>MIRRORS</li>P
<li>HOME ACCESSORIES</li>
<li>ART & WALL DECOR</li>
    <p>RUGS</p>
    <p>KITCHEN & DINING</p>
    <p>BEDDING & BATH</p>
    <p>OUTDOOR</p>
    <p>    GIFTS</p>
    <p>SALE & OFFERS</p>
    <p>    KRAVITZ DESIGN</p>
    <p>  COLLABORATIONS</p>
    <p> IDEAS & INSPIRATION</p>
    <p>  FREE DESIGN SERVICES</p>
    <p>   TRADE PROGRAM
    </p>
    <p></p>
</div>
`
}
export default sidebar;