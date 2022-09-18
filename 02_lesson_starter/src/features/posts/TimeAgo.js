import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  //*this display how along ago was this posted
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    //*How long was it from now
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      {/* create a new space - non-breaking space */}
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
