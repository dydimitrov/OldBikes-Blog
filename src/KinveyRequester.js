import $ from 'jquery';

const KinveyRequester = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_SJM6T-TnS";
    const appSecret = "48df794c0b134886b3ed8342881a6d7c";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password, firstName, lastName) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password, firstName, lastName }
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function createPost(firstName, lastName,email,category, description,title) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/posts",
            headers: getKinveyUserAuthHeaders(),
            data: { firstName, lastName,email,category, description,title }
        });
    }

    function findAllPosts() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/posts",
            headers: getKinveyUserAuthHeaders()
        });
    }

    function findPostById(postId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/posts/" + postId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function deletePost(postId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/posts/" + postId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editPost(postId, firstName, lastName,email,category, description,title) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/posts/" + postId,
            headers: getKinveyUserAuthHeaders(),
            data: { firstName, lastName,email,category, description,title}
        });
    }

    return {
        loginUser,
        registerUser,
        logoutUser,
        createPost,
        findAllPosts,
        findPostById,
        deletePost,
        editPost
    }
})();

export default KinveyRequester;
