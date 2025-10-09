export default function isMagisk(filename) {
  return filename.toLowerCase().endsWith(".zip");
}