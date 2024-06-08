import Link from "next/link";
import "./BasicModel.css";
export function BasicModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Service Term & Policy </h2>
          <Link href="/Modal" className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="modal-body">
            Hello World Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptate quis ullam nisi quos aspernatur praesentium iste soluta aut quasi adipisci aperiam molestias explicabo eum, voluptatem fugiat laudantium eaque neque non et, rerum eligendi repellat? Blanditiis sint dignissimos maiores repudiandae labore, eos eveniet accusamus impedit, ipsam reiciendis, tempora aspernatur. Facilis facere, architecto autem ipsa consequuntur quasi non aut? Soluta et vero reprehenderit ut dolores nemo ex a dolorem temporibus. Quod libero veritatis amet rerum nisi facilis est voluptatibus, consectetur adipisci, labore, molestiae consequuntur ut? Inventore magnam voluptates reprehenderit rerum provident temporibus ipsum nesciunt natus doloremque, consequuntur accusamus fugiat animi aliquam?
        </div>
        <footer class="modal-container-footer">
			<button class="button is-ghost">Decline</button>
			<button class="button is-primary">Accept</button>
		</footer>
      </div>
    </div>
  );
}
