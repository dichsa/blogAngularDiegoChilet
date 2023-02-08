import { style } from '@angular/animations';
import { Component} from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  styles: ['li { font-size: 20px }']
})

export class BlogComponent {

  titulo: string = "";
  imagen: string = "";
  cuerpo: string = "";
  fecha: string = "";
  arrBlog: Noticias[] = [];
  blogContent: string = "";

  guardar(): void {
    let blog: Noticias = {
      titulo: this.titulo,
      imagen: this.imagen,
      cuerpo: this.cuerpo,
      fecha: this.fecha
    }

    this.arrBlog.push(blog);
    this.cargarDatos();

    this.titulo = "";
    this.imagen = "";
    this.cuerpo = "";
    this.fecha = "";
  }

  cargarDatos(): void {
    this.blogContent = "";
    this.arrBlog.forEach(blog => {
      this.blogContent += `<li class="tituloNoticia"> ${blog.titulo} </li>
                          <li class="imagenNoticia"><img src="${blog.imagen}"><li/>
                          <li class="cuerpoNoticia"> ${blog.cuerpo} </li> 
                          <li class="fechaNoticia"> ${blog.fecha} </li> `;
    });
  } 

}
