import React from 'react';
import photo from '../Components/ben2.jpg';

const AboutPage = () => {
  return (
    <div id="About" style={{display:'block', marginTop: '70px'}}>
        <div class="aboutme">
            <h1 style={{margin:'20px'}}>Hello There I'm Berkay ^Teory^ Koksal.</h1>
            <p style={{margin:'20px', fontSize:'14px'}}>  Merhabalar, ben Berkay Köksal. 23 yaşındayım. İstanbulda ikamet ediyorum. Hayatımın son 6 senesini yazılım alanında kendimi geliştirmeye çalışarak geçirdim. Google oyun ve uygulama akademisine, 36000 başvuru arasında 2000 kişi arasına seçilerek katılmaya hak kazandım. 8 ay süren eğitimin sonunda, 5 kişilik bir ekip ile geliştirdiğimiz, aşağıda linkini paylaştığım oyunun fragmanını inceleyebilirsiniz.
                                                          <br/>Meraklı ve tutkulu olduğum yazılım alanında ayıca yaptığım bazı projeleri, aşağıda paylaştığım GitHub profilimden görebilirsiniz. Bunların arasında; website klonlama, Unity ile yaptığım oyunlar ve freelance olarak yaptığım işleri de görebilirsiniz. Ayrıca Android platformu için geliştirip, Google Play store da yayınladığım CubeMover oyunuma da ulaşabilirsiniz. 
                                                          <br/>HTML5, CSS, JavaScript, React, Bootsrap, MongoDB, ASP.NET, Unity, C# dillerine hakimim. Öğrenmeye açık ve istekli biriyim.
                                                          <br/>Kendimi daha iyi ifade edebilmek ve yeteneklerimi daha iyi sergileyebilmek adına sizlerle görüşme yapmayı çok isterim.
                                                          <br/>
                                                          <br/>Linkler:
                                                          <br/>Websitem: <a href="https://fiyasko.online/">https://fiyasko.online/</a>
                                                          <br/>Github: <a href="https://github.com/teoory">https://github.com/teoory</a>
                                                          <br/>play store: <a href="https://play.google.com/store/apps/dev?id=5030041674505470125">https://play.google.com/store/apps/dev?id=5030041674505470125</a>
              </p>
            <a style={{margin:'20px', color:'goldenrod', fontSize:'24px', backgroundColor:'#212121', borderRadius:'15px', padding:'10px'}} href="mailto:berkay.koksall54@gmail.com">Contact Me!</a>
            <img src={photo} alt="ben" style={{width:'300px', height:'auto', borderRadius:'15px', margin:'50px'}}/>
        </div>
    </div>
  )
}

export default AboutPage