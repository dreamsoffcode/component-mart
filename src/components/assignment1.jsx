export default function Assignment1(){
    const cardStyle = {
      maxWidth: "300px",
      maxHeight: "450px",
      border: "0.01px solid grey"
    }
    return(
      <div style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                   height: screen.height*0.7
                  }}>
        <div style={cardStyle}>
          <Profile />
          <hr style={{color: "grey"}}></hr>
          <Count followers="80K" likes="803K" photos="1.4K"/>
        </div>
      </div>
      
    )
}

function Profile(){
  const cardStyle = {
    marginBottom: "45px",
    position: "relative"
  }
  const imgStyle = {
    maxHeight: "125px",
    width: "300px",
    marginBottom: "70px"
  }
  const picStyle = {

    borderRadius: "50% 50%",
    width: "120px",
    height: "120px",
    position: "absolute",
    top: "70px",
    left: "90px",
  }
  return (
    <div style={cardStyle}>
      <img style={imgStyle} src="../../static/images/profile_background.jpg"></img>          <img style={picStyle} src="../../static/images/profile_photo.jpg"></img>
      <ProfileData name={"Rita Correia"} age="32" city={"London"}/>
    </div>
  )
  
}

function Count({followers, likes, photos}){
  return (
    <div style={{
       display: "flex",
       justifyContent: "space-between",
       marginTop: "5px"
    }}>
      <CountElement name="Followers" value={followers}/>
      <CountElement name="Likes" value={likes}/>
      <CountElement name="Photos" value={photos}/>
    </div>
  )
}

function CountElement({name, value}){
  const countValue = {
    fontSize: "20px",
    fontWeight: "bold",
    paddingTop: "3px",
    display: "flex",
    justifyContent: "center"
  }
  const countName = {
    fontSize: "13px",
    color: "grey",
    display: "flex",
    justifyContent: "center"
  }
  return(
    <div style={{paddingLeft: "20px",    
      paddingRight: "20px"}}>
      <div style={countValue}>{value}</div>
      <div style={countName}>{name}</div>
    </div>
  )
}

function ProfileData({name, age, city}){
  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    paddingRight: "5px"
  }
  const ageStyle = {
    fontSize: "17px",
    color: "grey"
  }
  const cityStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: "15.5px",
    color: "grey",
  }
  return (
    <div>
      <div style={{
         display: "flex",
         justifyContent: "center"
      }}>
        <div style={nameStyle}>{ name }</div>
        <div style={ageStyle}>{ age }</div>
      </div>
      <div style={cityStyle}>
        {city}
      </div>
    </div>
  )
}