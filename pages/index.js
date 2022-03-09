import Head from 'next/head'
import Header from "../components/layout/Header"
import styles from  "../styles/Home.module.css"



export default function Home() {

  return (
    <div>
      <Head>
        <title>Yanisa Poongthaisong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header />
     <main className={styles.main}>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit ex, aliquet in egestas vel, vulputate in enim. Nam interdum dui ut magna convallis, sed lacinia erat facilisis. Vivamus sed rutrum odio. Morbi pulvinar ut neque in rhoncus. Nulla porttitor interdum erat, at mattis velit suscipit a. Nam vitae mi maximus, congue leo vel, tempus mauris. Suspendisse posuere non lorem sodales porttitor. Integer a orci nec enim rutrum eleifend vitae nec lorem. Sed erat justo, convallis a augue quis, egestas euismod arcu. Aliquam erat volutpat. Phasellus placerat nisl est, quis accumsan ante congue dictum.

Vivamus interdum nunc vitae ligula cursus vulputate. Etiam vitae eleifend nisl. Ut suscipit rhoncus nibh at ullamcorper. Phasellus eu euismod dolor. Fusce eget orci accumsan, sollicitudin est vitae, lobortis ex. Phasellus a augue in mi elementum elementum. Nullam at diam nibh. Praesent id diam congue, fermentum neque id, imperdiet dolor. Nulla maximus, neque at rhoncus tempor, turpis lacus molestie ipsum, at gravida diam magna sed tortor. Aenean eget sem vitae tellus tempus scelerisque placerat et massa. Proin dapibus volutpat nibh malesuada auctor. Aenean porta, nunc ac laoreet tincidunt, ligula nulla volutpat erat, non tempus nisl metus et justo. Donec tempus lectus sed sem fermentum fermentum. Sed consectetur suscipit metus nec tincidunt. Curabitur commodo urna odio, sed ullamcorper ante vehicula a. Praesent suscipit velit sit amet laoreet eleifend.

Vivamus bibendum vitae nibh vitae sodales. Quisque tempor, augue sed gravida rutrum, ante lectus tempus erat, eu molestie metus lorem nec sapien. Integer erat neque, tincidunt a scelerisque ornare, molestie eu elit. Donec neque quam, luctus quis venenatis at, auctor ut neque. Fusce eget metus eget purus rutrum pretium a id lectus. Donec molestie, dui eu condimentum dapibus, turpis nulla tincidunt libero, ac varius nisi odio vel orci. Duis porta lacinia ante, eu tincidunt est vehicula sed. In aliquam ipsum vel malesuada finibus. Sed scelerisque gravida lacus, at finibus metus viverra nec. Sed mollis laoreet elit ac volutpat. Nulla posuere nisl ipsum, sit amet lobortis ante vehicula lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vestibulum libero ac dapibus feugiat.

Proin suscipit, nunc convallis tempus euismod, mi ligula porta lectus, eget porta est diam id velit. Donec at est massa. Proin ac ligula vel augue aliquet luctus. Nunc sem justo, bibendum in vehicula porta, tempus nec neque. In mi dui, mattis vel mollis egestas, varius in elit. Curabitur ac quam elementum, pulvinar odio sit amet, hendrerit tortor. Phasellus blandit eu erat quis dapibus. Mauris in efficitur diam, id interdum ipsum. Nullam quis accumsan sapien. Mauris tempor placerat tellus et rhoncus. Sed id ligula faucibus, pellentesque justo at, facilisis orci. Nullam iaculis pharetra imperdiet. Ut ut eros id nisi pretium vulputate et non sapien. Aenean pellentesque ligula eget nulla pellentesque semper. Curabitur viverra, turpis sed semper lacinia, purus enim maximus metus, et maximus ipsum elit vehicula sem.
    </p>
     </main>
    </div>
  )
}
