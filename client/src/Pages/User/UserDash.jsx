import React from "react";
import classes from "./UserDash.module.css";
import {Link, useLoaderData, useParams} from "react-router-dom";
import ImgGrid from "../../Components/ImgGrid/ImgGrid";
import {useQuery} from "@tanstack/react-query";
import {getUserDetails, getUserImage, queryClient} from "../../utils/http";
const UserDash = () => {
  const UserData = useLoaderData();
  const params = useParams();
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["userImage", params.id],
    queryFn: ({signal}) => getUserImage({signal, id: params.id}),
  });
  let images = [];
  if (!isPending) {
    data.images.map((image) => images.push(image));
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.name}>{UserData?.username}</h1>
      <div className={classes.content}>
        <div className={classes.sideBar}>
          <p>Got Something on your mind?</p>
          <Link to={`/generate/${params.id}`} className={classes.router}>
            Go to Canvas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M13.1876 12.1328L5.46886 4.42187C5.31941 4.29388 5.12716 4.227 4.93054 4.23459C4.73392 4.24219 4.5474 4.3237 4.40827 4.46283C4.26913 4.60197 4.18762 4.78848 4.18003 4.98511C4.17243 5.18173 4.23931 5.37397 4.3673 5.52343L11.4454 12.6016L4.57043 19.4766C4.42492 19.6229 4.34324 19.8209 4.34324 20.0273C4.34324 20.2337 4.42492 20.4317 4.57043 20.5781C4.64305 20.6513 4.72946 20.7095 4.82466 20.7491C4.91987 20.7888 5.02198 20.8092 5.12511 20.8092C5.22825 20.8092 5.33036 20.7888 5.42556 20.7491C5.52077 20.7095 5.60717 20.6513 5.6798 20.5781L13.1876 13.0703C13.3117 12.9458 13.3813 12.7773 13.3813 12.6016C13.3813 12.4258 13.3117 12.2573 13.1876 12.1328Z"
                fill="white"
              />
              <path
                d="M22.3895 12.1328L14.6708 4.42187C14.5213 4.29388 14.3291 4.227 14.1324 4.23459C13.9358 4.24219 13.7493 4.3237 13.6102 4.46283C13.471 4.60197 13.3895 4.78848 13.3819 4.98511C13.3743 5.18173 13.4412 5.37397 13.5692 5.52343L20.6473 12.6016L13.7723 19.4766C13.6268 19.6229 13.5451 19.8209 13.5451 20.0273C13.5451 20.2337 13.6268 20.4317 13.7723 20.5781C13.9187 20.7236 14.1167 20.8053 14.3231 20.8053C14.5295 20.8053 14.7275 20.7236 14.8739 20.5781L22.3895 13.0703C22.5136 12.9458 22.5832 12.7773 22.5832 12.6016C22.5832 12.4258 22.5136 12.2573 22.3895 12.1328Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className={classes.links}>
            <ul>
              <li>
                <Link to="/">Popular Prompts</Link>
              </li>
              <li>
                <Link to="/">Random Generator</Link>
              </li>
              <li>
                <Link to="/">Top of the Day</Link>
              </li>
              <li>
                <Link to="/">Account Settings</Link>
              </li>
            </ul>
            <Link to="/" className={classes.router}>
              Upgrade to Pro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M9.04748 8.88094C9.04748 8.88094 8.32029 12.5331 8.65748 13.5406C8.65748 13.5406 9.10436 8.01562 13.3984 3.75C13.3984 3.75 13.2603 7.32094 15.4906 9.13281C17.7209 10.9447 18.2247 13.7641 18.2247 13.7641C18.2247 13.7641 18.4765 11.8384 17.7209 8.755C17.7209 8.755 22.4619 13.6788 20.2884 19.1753C20.2884 19.1753 17.6681 25.2284 10.1647 22.5797C2.66123 19.9309 7.70686 9.83156 9.04748 8.88094Z"
                  fill="#F6AF62"
                />
                <path
                  d="M17.0546 13.5487C17.1237 15.0965 16.4249 15.5028 15.8602 15.584C15.4987 15.6369 15.1331 15.5434 14.8162 15.3687C11.7084 13.6828 13.3049 9.56342 13.3049 9.56342C11.2696 11.5094 12.3299 15.5515 12.3299 15.5515C12.3299 15.5515 12.9596 17.8428 11.6718 18.0419C11.0259 18.1434 10.7252 17.8834 10.5871 17.6031C10.4612 17.3431 10.4612 17.0384 10.5709 16.7703C11.4443 14.6009 10.6968 13.374 10.6968 13.374C10.2784 14.6172 9.83556 15.4378 9.51462 15.9294C9.05962 16.6281 8.77118 17.4244 8.73056 18.2572C8.58431 21.3609 11.1843 22.6 11.1843 22.6C15.454 24.7775 17.3715 20.7962 17.3715 20.7962C19.5774 16.555 17.0546 13.5487 17.0546 13.5487Z"
                  fill="#FBD872"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={classes.imggrid}>
          {!isPending && <ImgGrid images={images} />}
        </div>
      </div>
    </div>
  );
};

export default UserDash;

export const loader = async ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ["user", params.id],
    queryFn: ({signal}) => getUserDetails({signal, id: params.id}),
    staleTime: 600000,
  });
};
