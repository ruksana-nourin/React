import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/users/UserManage";
import Usercreate from "./views/pages/users/UserCreate";
import Error from "./views/pages/404";
import Login from "./views/pages/Login";
import View from "./views/pages/users/View";
import Edit from "./views/pages/users/Edit";
import BookList from "./views/pages/books/BookList";
import AuthorList from "./views/pages/authors/AuthorList";
import CategoryList from "./views/pages/categories/CategoryList";
import PublisherList from "./views/pages/publishers/PublisherList";
import AddBook from "./views/pages/books/AddBook";
import ViewBook from "./views/pages/books/ViewBook";
import EditBook from "./views/pages/books/EditBook";
import AddAuthor from "./views/pages/authors/AddAuthor";
import ViewAuthor from "./views/pages/authors/ViewAuthor";
import EditAuthor from "./views/pages/authors/EditAuthor";
import AddCategory from "./views/pages/categories/AddCategory";
import ViewCategory from "./views/pages/categories/ViewCategory";
import EditCategory from "./views/pages/categories/EditCategory";
import AddPublisher from "./views/pages/publishers/AddPublisher";
import ViewPublisher from "./views/pages/publishers/ViewPublisher";
import EditPublisher from "./views/pages/publishers/EditPublisher";
import MemberList from "./views/pages/members/MemberList";
import AddMember from "./views/pages/members/AddMember";
import ViewMember from "./views/pages/members/ViewMember";
import EditMember from "./views/pages/members/EditMember";
import IssueBook from "./views/pages/issues/IssueBook";
import IssuedBooks from "./views/pages/issues/IssuedBooks";
import ReturnBook from "./views/pages/issues/ReturnBook";
import ReturnedBooks from "./views/pages/issues/ReturnedBooks";
import FinePayments from "./views/pages/issues/FinePayments";
import MembershipPayments from "./views/pages/members/MembershipPayments";
import Settings from "./views/pages/settings/Settings";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/user",
                element: <UserManage />
            },
            {
                path: "/add-user",
                element: <Usercreate />
            },
            {
                path: "/view-user",
                element: <View />
            },
            {
                path: "/edit-user",
                element: <Edit />
            },


            {
                path: "/books",
                element: <BookList />
            },
            {
                path: "/add-book",
                element: <AddBook />
            },
            {
                path: "book/:id",
                element: <ViewBook />
            },
            {
                path: "/book/:id/edit",
                element: <EditBook />
            },


            {
                path: "/authors",
                element: <AuthorList />
            },
            {
                path: "/add-author",
                element: <AddAuthor />
            },
            {
                path: "/author/:id",
                element: <ViewAuthor />
            },
            {
                path: "/author/:id/edit",
                element: <EditAuthor />
            },


            {
                path: "/categories",
                element: <CategoryList />
            },
            {
                path: "/add-category",
                element: <AddCategory />
            },
            {
                path: "/category/:id",
                element: <ViewCategory />
            },
            {
                path: "/category/:id/edit",
                element: <EditCategory />
            },


            {
                path: "/publishers",
                element: <PublisherList />
            },
            {
                path: "/add-publisher",
                element: <AddPublisher />
            },
            {
                path: "/publisher/:id",
                element: <ViewPublisher />
            },
            {
                path: "/publisher/:id/edit",
                element: <EditPublisher />
            },


            {
                path: "members",
                element: <MemberList />
            },
            {
                path: "/add-member",
                element: <AddMember />
            },
            {
                path: "/member/:id",
                element: <ViewMember />
            },
            {
                path: "/member/:id/edit",
                element: <EditMember />
            },
            {
                path: "/membership-payments",
                element: <MembershipPayments />
            },


            {
                path: "/issues",
                element: <IssueBook />
            },
            {
                path: "/issued-books",
                element: <IssuedBooks />
            },
            {
                path: "/issue/:id/return",
                element: <ReturnBook />
            },
            {
                path: "/returned-books",
                element: <ReturnedBooks />
            },
            {
                path: "/fine-payments",
                element: <FinePayments />
            },


            {
                path: "/settings",
                element: <Settings />
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Error />
    },
]);

export default routes