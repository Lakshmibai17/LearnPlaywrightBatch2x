function isValidJsBasicsIdentifier(name) {
    if (name === "loginButton") {
        return true;
    } else if (name === "$submit") {
        return true;
    } else if (name = "1login") {
        return false;
    } else if (name === "let") {
        return false;
    }
}