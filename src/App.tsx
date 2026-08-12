import Aside from "./components/Aside/Aside"

function App() {
  // const [activeSection, setActiveSection] = useState<boolean>(false)
  return (
    <>
      <Aside />

      <main className="mt-32 h-full">
        <header>
          <div>
            <p>Booking · Confirmed</p>
            <h1>Bienvenue, <span>Lucia</span>
            </h1>
          </div>
          <div>
            <button>Print receipt</button>
            <button>Add to calendar</button>
          </div>
        </header>

        <section>
          <div>
            <article>
            </article>
            <article></article>
          </div>
          <p></p>
        </section>
      </main>
    </>

    // <!-- Receipt card -->
    // 
    // № MS-2026
    // 0421-AH

    // Your stay

    // Check in
    // 25 Apr
    // Saturday · 15:00

    // Check out
    // 29 Apr
    // Wednesday · 11:00

    // Room · La Garrigue · 4 nights
    // € 620.00
    // Breakfast · 2 guests
    // € 96.00
    // Tourist tax
    // € 14.40

    // Total paid
    // € 730.40

    // Paid · Wise · GBP
    // <!-- Barcode image -->

    // <!-- Note from host card -->
    // Welcome
    // A note from your host, Margaux.
    // We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.
    // Room
    // La Garrigue

    // <!-- Booking cards end -->

    // <!-- Guest info row starts -->

    // <!-- Arrival -->
    // Arrival
    // 01
    // Check-in from 15:00
    // Sat, 25 April
    // Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.

    // <!-- Wifi -->
    // Wifi
    // 02
    // Le Soleil · Guest
    // Password below
    // Network
    // Le Soleil · Guest
    // Password
    // soleil-2026
    // Copy

    // <!-- Breakfast -->
    // Breakfast
    // 03
    // Served 8 - 10:30
    // On the terrace
    // Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.

    // <!-- Guest info row ends -->

    // <!-- Main content ends -->
  )
}

export default App
