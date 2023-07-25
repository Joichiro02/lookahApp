export default function DateFormater(date) {
    return date
        .toLocaleString()
        .replaceAll("/", "")
        .replaceAll(":", "")
        .replaceAll(", ", "_");
}
