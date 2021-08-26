const listado = document.querySelector("#lista-asignaturas");

export default class UI {
  imprimirAsignaturas(asignaturas) {
    this.limpiarHTML();

    if (asignaturas.length > 0) {
      asignaturas.forEach((asignatura) => {
        const {
          nombre,
          horario,
          semestre,
          aula,
          reunion,
          docente,
          correo,
          notas,
          color,
          id,
        } = asignatura;

        const card = document.createElement("article");
        card.classList.add("card", color);
        card.dataset.id = id;
        card.innerHTML = `
				<div class="card-body">
					<h5 class="card-title">${nombre}</h5>
					<p class="card-subtitle text-muted mb-3">
						${horario}
					</p>
					<div class="row mb-2">
						<div class="col-auto">
							<p class="mb-0">
								<span class="text-muted">Semestre:</span>
								${semestre}
							</p>
						</div>
						<div class="col-auto">
							<p class="mb-0">
								<span class="text-muted">Aula:</span>
								${aula}
							</p>
						</div>
						<div
							class="col-12 col-sm-auto col-md-12 col-lg-auto ms-auto"
						>
							<a
								href="${reunion}"
								target="_blank"
							>
								${reunion}
							</a>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-auto">
							<p class="mb-0">
								<span class="text-muted">Docente:</span>
								${docente}
							</p>
						</div>
						<div
							class="col-12 col-sm-auto col-md-12 col-lg-auto ms-auto"
						>
							<a href="mailto:${correo}">${correo}</a>
						</div>
					</div>
					<div class="accordion mb-3" id="accordion${id}">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading${id}">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapse${id}"
									aria-expanded="false"
									aria-controls="collapse${id}"
								>
									Notas
								</button>
							</h2>
							<div
								id="collapse${id}"
								class="accordion-collapse collapse"
								aria-labelledby="heading${id}"
								data-bs-parent="#accordion${id}"
							>
								<div class="accordion-body">
									<p class="mb-0">
										${notas.replace(/\n/g, "<br />")}
									</p>
								</div>
							</div>
						</div>
					</div>
					<button class="btn btn-primary">
						<i class="bi bi-pen"></i>
						Editar
					</button>
					<button class="btn btn-danger">
						<i class="bi bi-trash"></i>
						Eliminar
					</button>
				</div>
			`;

        listado.appendChild(card);
      });
    }
  }
  limpiarHTML() {
    while (listado.firstChild) {
      listado.removeChild(listado.firstChild);
    }
  }
  mostrarAlerta(mensaje, tipo) {
    if (!document.querySelector(".alert")) {
      const iconos = {
        success: '<i class="bi bi-check-circle"></i>',
        info: '<i class="bi bi-info-circle"></i>',
        danger: '<i class="bi bi-exclamation-circle"></i>',
      };

      const alerta = document.createElement("div");
      alerta.innerHTML = `${iconos[tipo]} ${mensaje}`;
      alerta.classList.add("alert", `alert-${tipo}`);
      alerta.setAttribute("role", "alert");

      document.querySelector("#formulario").appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  }
}
