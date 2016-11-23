$(document).ready(function(){
				var longitudPortaAviones = 5;
				var longitudBuque = 3;
				var longitudLancha = 1;
				$("#btn-listo").prop("disabled", true);
			
				$(".celda").mouseover(function() {
					if(!$(this).hasClass("ocupada")){ //Debido a $(".celda").click(function() {
						var longitud = parseInt($("#longitud").val());
						if(longitud > 0){
							var direccion = $("#direccion").val();
							var coord;
							var idHelp;
							var idsLst = [];
							var puedeOcupar = true;
							var puedeOcuparHelp;
							if(direccion == "h"){
								coord = parseInt(this.id.substr(7, 1));
							}else{
								coord = parseInt(this.id.substr(6, 1));
							}
							if(longitud <= (parseInt(10)-coord))
							{
								for(var i=0; i<longitud; i++){
									if(direccion == "h"){
										idHelp = "#" + this.id.substr(0, 7) + (coord+i).toString();
									}else{
										idHelp = "#" + this.id.substr(0, 6) + (coord+i).toString() + this.id.substr(7, 1);
									}
									idsLst.push(idHelp);
								}
								for ( var i = 0; i < idsLst.length; i++ ) {
									puedeOcupar = puedeOcupar && !$(idsLst[i]).hasClass("ocupada");
								}
								if(puedeOcupar){
									for ( var i = 0; i < idsLst.length; i++ ) {
										$(idsLst[i]).attr("bgcolor","#04B404");
									}
								}						
							}
						}
					}
				});
				
				$(".celda").mouseleave(function() {
					if(!$(this).hasClass("ocupada")){ //Debido a $(".celda").click(function() {
						var longitud = parseInt($("#longitud").val());
						if(longitud > 0){
							var direccion = $("#direccion").val();
							var coord;
							var idHelp;
							var idsLst = [];
							var puedeOcupar = true;
							if(direccion == "h"){
								coord = parseInt(this.id.substr(7, 1));
							}else{
								coord = parseInt(this.id.substr(6, 1));
							}
							if(longitud <= (parseInt(10)-coord))
							{
								for(var i=0; i<longitud; i++){
									if(direccion == "h"){
										idHelp = "#" + this.id.substr(0, 7) + (coord+i).toString();
									}else{
										idHelp = "#" + this.id.substr(0, 6) + (coord+i).toString() + this.id.substr(7, 1);
									}
									idsLst.push(idHelp);
								}
								for ( var i = 0; i < idsLst.length; i++ ) {
									puedeOcupar = puedeOcupar && !$(idsLst[i]).hasClass("ocupada");
								}
								if(puedeOcupar){
									for ( var i = 0; i < idsLst.length; i++ ) {
										$(idsLst[i]).attr("bgcolor","#ffffff");
									}
								}		
							}
						}
					}
				});
				
				$(".celda").click(function() {
					var longitud = parseInt($("#longitud").val());
					if(longitud > 0){
						var direccion = $("#direccion").val();
						var coord;
						var idHelp;
						var idsLst = [];
						var puedeOcupar = true;
						var cantidadNavesHelp;
						if(direccion == "h"){
							coord = parseInt(this.id.substr(7, 1));
						}else{
							coord = parseInt(this.id.substr(6, 1));
						}
						if(longitud <= (parseInt(10)-coord))
						{
							for(var i=0; i<longitud; i++){
								if(direccion == "h"){
									idHelp = "#" + this.id.substr(0, 7) + (coord+i).toString();
								}else{
									idHelp = "#" + this.id.substr(0, 6) + (coord+i).toString() + this.id.substr(7, 1);
								}
								idsLst.push(idHelp);
							}
							for ( var i = 0; i < idsLst.length; i++ ) {
								puedeOcupar = puedeOcupar && !$(idsLst[i]).hasClass("ocupada");
							}
							if(puedeOcupar){
								for(var i=0; i<longitud; i++){
									if(direccion == "h"){
										idHelp = "#" + this.id.substr(0, 7) + (coord+i).toString();
									}else{
										idHelp = "#" + this.id.substr(0, 6) + (coord+i).toString() + this.id.substr(7, 1);
									}
									$(idHelp).attr("bgcolor","#5bc0de");
									$(idHelp).removeClass("celda");
									$(idHelp).addClass("ocupada");
									$(".coord-input",idHelp).val(longitud.toString() + "-" + (i+1).toString()); //longitud de la nave, -, posicion
									if(longitud == 1){
										$(idHelp).append("◄►");
									}
									else if(i == 0){
										if(direccion == "h"){
											$(idHelp).append("◄");
										}else{
											$(idHelp).append("▲");
										}
									}
									else if((i+1) == longitud){
										if(direccion == "h"){
											$(idHelp).append("►");
										}else{
											$(idHelp).append("▼");
										}
									}
									else{
										if(direccion == "h"){
											$(idHelp).append("-");
										}else{
											$(idHelp).append("|");
										}
									}
								}
								if(longitud == longitudPortaAviones){
									cantidadNavesHelp = parseInt($("#cantidad-porta-aviones").html()) - 1;
									$("#cantidad-porta-aviones").html(cantidadNavesHelp);
									if(cantidadNavesHelp == 0){
										$("#elegir-porta-aviones").prop("disabled", true);
										restablecerJugada();
										activarBotonListoSiCorresponde();
									}
								}
								else if(longitud == longitudBuque){
									cantidadNavesHelp = parseInt($("#cantidad-buque").html()) - 1;
									$("#cantidad-buque").html(cantidadNavesHelp);
									if(cantidadNavesHelp == 0){
										$("#elegir-buque").prop("disabled", true);
										restablecerJugada();
										activarBotonListoSiCorresponde();
									}
								}
								else if(longitud == longitudLancha){
									cantidadNavesHelp = parseInt($("#cantidad-lancha").html()) - 1;
									$("#cantidad-lancha").html(cantidadNavesHelp);
									if(cantidadNavesHelp == 0){
										$("#elegir-lancha").prop("disabled", true);
										restablecerJugada();
										activarBotonListoSiCorresponde();
									}
								}
							}
						}
					}
				});
				
				$(".elegir").click(function() {
					$("#longitud").val(0);
					$("#botonera-acciones-tablero").show();
					var id = this.id;
					if(id == "elegir-porta-aviones"){
						$("#longitud").val(longitudPortaAviones);
					}else if(id == "elegir-buque"){
						$("#longitud").val(longitudBuque);
					}else if(id == "elegir-lancha"){
						$("#longitud").val(longitudLancha);
					}
				});
				
				$("#deshacer").click(function() {
					restablecerJugada();
				});
				
				$("#girar").click(function() {
					var direccion = $("#direccion").val();
					if(direccion == "h"){
						$("#direccion").val("v");
					}else{
						$("#direccion").val("h");
					}
				});
			});
			
			function restablecerJugada(){
				$("#botonera-acciones-tablero").hide();
				$("#longitud").val(0);
				$("#direccion").val("h");
			}
			
			function activarBotonListoSiCorresponde(){
				if(parseInt($("#cantidad-porta-aviones").html()) == 0 &&
				   parseInt($("#cantidad-buque").html()) == 0 &&
				   parseInt($("#cantidad-lancha").html()) == 0)
				{
					$("#btn-listo").prop("disabled", false);
				}	
			}