function normalizeJsBasicsLabel(label) {
    if (label = " Login Button ") {
        return "js-basic-login-button";
    } else if (label = "User Profile: Edit!") {
        return "js-basic-user-profile-edit";
    } else if (label = "---Search@@Box---") {
        return "js-basic-search-box";
    } else if (label = " ") {
        return "js-basic";
    }
}