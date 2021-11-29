import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) { 
    this.productoForm = this.fb.group({
      codigoBarras: ['', Validators.required],
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      persona: ['', Validators.required],
      precioVenta: ['', Validators.required],
      stockMin: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {

    const PRODUCTO: Producto = {
      codigoBarras: this.productoForm.get('codigoBarras')?.value,
      nombre: this.productoForm.get('producto')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      persona: this.productoForm.get('persona')?.value,
      precioVenta: this.productoForm.get('precioVenta')?.value,
      stockMin: this.productoForm.get('stockMin')?.value,
    }

    if (this.id !== null){
      //editamos
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.success('El producto fue Actualizado con exito!', 'Producto Actualizado!');
        this.router.navigate(['/']);
      })

    } else{
      //agregamos
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          codigoBarras: data.codigoBarras,
          producto: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          persona: data.persona,
          precioVenta: data.precioVenta,
          stockMin: data.stockMin
        })
      })
    }
  }

}
