import { Component, OnInit} from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit{

  titulo: string = "";
  imagen: string = "";
  cuerpo: string = "";
  fecha: string = "";
  arrBlog: Noticias[] = [];
  blogContent: string = "";
  noticiasContent: string = "";
  arrNoticias: Noticias[] = [];

  ngOnInit(): void {
    this.noticiasContent = `<li class="tituloNoticia"> Noticia 1 </li>
                          <li class="imagenNoticia"><img src="https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0130_dachshund_smooth_mini.jpg?itok=VWhDhag0"><li/>
                          <li class="cuerpoNoticia">Esta es la noticia 1</li> 
                          <li class="fechaNoticia">21-10-2021</li> 

                          <li class="tituloNoticia"> Noticia 2 </li>
                          <li class="imagenNoticia"><img src="https://www.aquanatura.es/spa/item/resource/ART11139/IMG_20200626_111124.jpg"><li/>
                          <li class="cuerpoNoticia">Esta es la noticia 2</li> 
                          <li class="fechaNoticia">21-10-2022</li>`;
  }

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
    console.log(this.arrBlog)
    this.arrBlog.forEach(blog => {
      this.blogContent += `<li class="tituloNoticia"> ${blog.titulo} </li>
                          <li class="imagenNoticia"><img src="${blog.imagen}"><li/>
                          <li class="cuerpoNoticia"> ${blog.cuerpo} </li> 
                          <li class="fechaNoticia"> ${blog.fecha} </li> `;
    });
  } 

}
