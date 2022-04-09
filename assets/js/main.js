window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		// edit button 
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.classList.add("ri-edit-line"); //edit icon

		// delete button
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.classList.add('ri-delete-bin-line'); //delete icon
		

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		// edit/save function
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.classList.contains('ri-edit-line')) {
				// task_edit_el.innerText = "Save";
				task_edit_el.classList.remove("ri-edit-line");
				task_edit_el.classList.add("ri-check-line");
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				// task_edit_el.innerText = "Edit";
				task_edit_el.classList.remove("ri-check-line");
				task_edit_el.classList.add("ri-edit-line");
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		// delete function
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

		// border radius
        document.querySelector('#colll').style.borderBottomRightRadius = "0";
        document.querySelector('#colll').style.borderBottomLeftRadius = "0";
	});
});
