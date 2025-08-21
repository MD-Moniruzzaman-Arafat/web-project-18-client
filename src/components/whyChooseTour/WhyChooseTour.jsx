import diamond from '../../assets/icon/diamond.svg'
import ballon from '../../assets/icon/hot-air-balloon.svg'
import medal from '../../assets/icon/medal.svg'
import ticket from '../../assets/icon/ticket.svg'

export default function WhyChooseTour() {
  return (
    <>
      <div className="container mx-auto py-20 px-2">
        <h1 className="text-3xl font-bold mb-5">Why Choose Tour?</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <img src={diamond} alt="" className="w-10" />
              <h2 className="card-title">Quality at our core</h2>
              <p>
                High-quality standards. Millions of reviews. A tourz company.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <img src={medal} alt="" className="w-10" />
              <h2 className="card-title">Award-winning support</h2>
              <p>New price? New plan? No problem. We're here to help, 24/7.</p>
            </div>
          </div>
          <div className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <img src={ballon} alt="" className="w-10" />
              <h2 className="card-title">Memorable experiences</h2>
              <p>
                Browse and book tours and activities so incredible, you'll want
                to tell your friends.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <img src={ticket} alt="" className="w-10" />
              <h2 className="card-title">Ultimate flexibility</h2>
              <p>
                ou're in control, with free cancellation and payment options to
                satisfy any plan or budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
