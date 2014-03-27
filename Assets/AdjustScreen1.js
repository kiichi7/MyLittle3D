#pragma strict

function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.Alpha2)) {
		GetComponent(Camera).rect.x -= 0.001;
		GetComponent(Camera).rect.width += 0.001;
	}
	if (Input.GetKey(KeyCode.Alpha1)) {
		GetComponent(Camera).rect.x += 0.001;
		GetComponent(Camera).rect.width -= 0.001;
	}
	if (Input.GetKey(KeyCode.Alpha4)) {
		GetComponent(Camera).rect.y -= 0.001;
		GetComponent(Camera).rect.height += 0.002;
	}
	if (Input.GetKey(KeyCode.Alpha3)) {
		GetComponent(Camera).rect.y += 0.001;
		GetComponent(Camera).rect.height -= 0.002;
	}

}