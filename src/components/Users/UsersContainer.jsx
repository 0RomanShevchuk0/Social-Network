import { connect } from "react-redux";
import axios from "axios";

import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsLoading,} from "../../redux/users-reducer";
import Users from "./Users";


const UsersContainer = (props) => {
  if (props.users.length === 0) {
    props.setIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
      .then((response) => {
        props.setIsLoading(false);
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount);
      });
  }

  let onPageChange = (pageNumber) => {
    props.setIsLoading(true);
    props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
      .then((response) => {
        props.setIsLoading(false);
        props.setUsers(response.data.items);
      });
  };

  return (
    <Users {...props} onPageChange={onPageChange} follow={props.follow} unfollow={props.unfollow} />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

export default connect(mapStateToProps, 
	{ follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsLoading })
	(UsersContainer);
