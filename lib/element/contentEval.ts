import childBuilder from "./childBuilder";

export default function contentEval(elem: ParseElement | null | undefined) {
  if (!elem) return [];
  if (elem.content) {
    return [elem.content];
  } else if (elem.children) {
    return childBuilder(elem.children);
  } else {
    return [];
  }
}
