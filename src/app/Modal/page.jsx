import Link from "next/link";
import { BasicModal } from "@/lib/BasicModel";
export default function Page({ searchParams, params }) {
  const showModal = searchParams?.modal;
  console.log(params, showModal);
  return (
    <div className="modal-container">
    
      {showModal && <BasicModal />}
      <Link href="Modal/?modal=true" className='button'>Open Modal</Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi
        eius molestiae, aperiam, praesentium aut excepturi eum a nemo tempore
        qui sequi nulla facilis dolorem consequuntur ut, minima numquam quis
        reprehenderit! Voluptate magnam culpa amet obcaecati, maxime repellendus
        omnis aliquam. Nostrum, natus! Expedita quo earum ratione qui doloribus
        quis adipisci id debitis perferendis, libero asperiores placeat alias
        quaerat ex aperiam sequi suscipit deserunt vel facere illum? Nam
        excepturi illum aperiam porro perferendis voluptate eveniet vero
        perspiciatis qui dolore soluta corporis, debitis laborum veniam officia
        sequi, fuga nobis quisquam. Quam dolore similique vitae voluptates
        repudiandae asperiores amet magnam fuga aliquam vel.
      </p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      perspiciatis iste dolor fugiat distinctio quisquam quae, aperiam iusto
      tempore beatae recusandae praesentium, nam officia repellendus provident!
      Totam at magnam recusandae quaerat dignissimos illo expedita praesentium,
      obcaecati, in temporibus nulla inventore. Quisquam sunt placeat soluta
      veritatis neque voluptatibus, repellendus ex iste ullam nemo eius
      explicabo eos incidunt laboriosam corrupti libero maiores alias
      accusantium ipsa voluptas unde. Sapiente in sunt provident soluta enim
      dolor similique odio debitis, sit impedit? Exercitationem, harum illo enim
      reiciendis quod eveniet voluptatem atque fugit? Fugit nostrum eligendi
      aliquid corrupti autem voluptate recusandae nisi dignissimos quidem quas
      quaerat iusto labore dolor ullam delectus nam, eaque aliquam excepturi ab?
    </div>
  );
}
