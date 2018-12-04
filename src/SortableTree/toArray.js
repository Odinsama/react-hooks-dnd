export function toArray(tree, nodeId = 'root', depth = 0, acc = []){
    const node = tree[nodeId]
    node.depth = depth
    acc.push(node)
    if(node.childIds.length){
        for (let i = 0; i < node.childIds.length; i++) {
            const childId = node.childIds[i]
            toArray(tree, childId, depth + 1, acc)
        }
    }
    return acc
}