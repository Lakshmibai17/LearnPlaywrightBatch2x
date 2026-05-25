function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if ((hasSetup = true) && (hasPractice = true) && (hasNotes = true)) {
        return "READY";
    } else if ((hasSetup = true) && (hasPractice = false) && (hasNotes = true)) {
        return "BLOCKED";
    } else if ((hasSetup = "true") && (hasPractice = true) && (hasNotes = true)) {
        return "BLOCKED";
    }
}