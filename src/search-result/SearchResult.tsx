import "./SearchResult.css";
import ResultItem from "../result-item/ResultItem";

export default function SearchResult() {
  return (
    <div className="search-result">
      <h2 className="search-result-title">Search results</h2>
      <ul className="search-result-items">
        <ResultItem
          image="https://ap.rdcpix.com/c24e81a0a097277bde52fc1f824e02b8l-b1117342834od-w480_h360.jpg"
          title="GrandHouse"
          street="Valley View, 1334/3, California"
          rent={2400}
          bedroom={2}
          bathroom={1}
          surface={100}
          isActive={true}
        />
        <ResultItem
          image="https://ap.rdcpix.com/882ed7b005e6417df48846ea26273e55l-m713790322od-w480_h360.jpg"
          title="SandStudio"
          street="Valley View, 1334/3, California"
          rent={2800}
          bedroom={2}
          bathroom={1}
          surface={120}
        />
        <ResultItem
          image="https://ap.rdcpix.com/09c3c985cdb2bb2639945ab2688082abl-m3075208526od-w480_h360.jpg"
          title="BlackWall"
          street="Valley View, 1334/3, California"
          rent={3100}
          bedroom={3}
          bathroom={1}
          surface={140}
        />
        <ResultItem
          image="https://images.homes.com/listings/215/1132796063-737148861-original.jpg"
          title="SunRoof"
          street="Valley View, 1334/3, California"
          rent={3300}
          bedroom={3}
          bathroom={1}
          surface={160}
        />
      </ul>
    </div>
  );
}
