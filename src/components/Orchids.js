import { ListOfOrchids } from "../shared/ListOfOrchids";
import OrchidsPresentation from "./OrchidsPresentation";

export default function Orchids() {
  return (
    <div className="container my-4">
      <OrchidsPresentation orchids={ListOfOrchids} />
    </div>
  );
}
