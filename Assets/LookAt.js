#pragma strict
var something : GameObject;

function Start () {
	
}

function Update () {

	//transform.LookAt(GameObject.Find("Me").transform);
	var targetRotation = Quaternion.LookRotation(something.transform.position - transform.position,Vector3.up);
	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime * 5.0);

}