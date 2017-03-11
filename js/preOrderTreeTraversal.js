var Node = function (data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    };

var node1 = new Node(3, null, null);
var node3 = new Node(4, null, null);
var node5 = new Node(6 ,null ,null);
var node7 = new Node(7, null, null);
var node2 = new Node(2, node1, node3);
var node6 = new Node(5, node5, node7);
var node4 = new Node(1, node2, node6);

function preOrderRecursiveTreeTraversal(root){
    if(root === null) { return; }
    console.log(root.data);
    preOrderRecursiveTreeTraversal(root.left);
    preOrderRecursiveTreeTraversal(root.right);
}

preOrderRecursiveTreeTraversal(node4);

function preOrderIterativeTreeTraversal(root){
    var stack = [];
    if(root === null) { return; }

    stack.push(root);

    while(stack.length !== 0){
        var cur = stack.pop();
        console.log(cur.data);
        if(cur.right !== null) { stack.push(cur.right); }
        if(cur.left !== null) {stack.push(cur.left); }
    }
}

preOrderIterativeTreeTraversal(node4);
