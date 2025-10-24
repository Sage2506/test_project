import { Routes } from "@angular/router";

import { MarcasService } from "./marcas/marcas.service";
import { Marcas } from "./marcas/marcas";
import { Marca } from "./marcas/marca/marca";
import { Productos } from "./productos/productos";

export const homeRoutes: Routes = [
    {
        path: '',
        providers: [MarcasService],
        children:[
            {
                path: '',
                redirectTo: 'marcas',
                pathMatch: 'full'
            },
            {
                path: 'marcas',
                component: Marcas,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'productos',
                component: Productos,
                runGuardsAndResolvers: 'always'
            }
        ]
    }
]