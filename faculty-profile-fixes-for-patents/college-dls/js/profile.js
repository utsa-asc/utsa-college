$(window).on("load",function(){console.log("faculty profile javascript loaded"),$(document).ready(function(){function u(a){return a=new Date(a),Intl.DateTimeFormat("en-US").format(a)}""!==$("#uuid").val()?$.ajax({type:"GET",url:"https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/"+$("#uuid").val()}).done(function(i){if(0<(i=JSON.parse(i)).Articles.length){let s="<div class='container pb-4'><div class='accordion' id='accordion-publications'><div class='accordion-item'>";for(let o=0;o<i.Articles.length;o++){let a=i.Articles[o];var r,l="<h5 class='accordion-header' id='heading-publications-"+o+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-publications-"+o+"'>"+a.ArticleTitle.toString()+"</button></h5><div id='collapse-publications-"+o+"' class='accordion-collapse collapse' data-bs-parent='#accordion-publications'><div class='card-body'><div class='accordion-body-content'>",d="<li><strong>Journal:</strong> "+a.JournalName.toString()+"</li>";let t=a.DOI,n,e=(n=t?"<li><strong>DOI:</strong> <a href='"+(r="https://doi.org/"+t.toString())+"' blank='_blank'>"+r+"</a></li>":"","");e=a.Abstract?"<li><strong>Abstract:</strong> "+a.Abstract.toString()+"</li>":"",s+=l+"<ul>"+d+n+e+"</ul></div></div></div>"}s+="</div></div></div>",$("#publications").removeClass("d-none"),$("#publications").append(s)}else $("#publications").append("<p class='text-danger border border-danger p-3'>No data returned!</p>"),$("#publications").removeClass("d-none");if(0<i.Awards.length){let o="<div class='container'><div class='accordion pb-4' id='accordion-awards'><div class='accordion-item'>";for(let e=0;e<i.Awards.length;e++){let a=i.Awards[e];var s="<h5 class='accordion-header' id='heading-awards-"+e+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-awards-"+e+"'>"+a.AwardName.toString()+"</button></h5><div id='collapse-awards-"+e+"' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>",c="<li><strong>Year Awarded:</strong> "+u(a.ReceivedDate.toString())+"</li>";let t=a.URL,n=(t=t?"<li><strong>URL:</strong> <a href='"+t+"' blank='_blank'>"+t+"</a></li>":"","");n=a.GoverningSocietyName?"<li><strong>Governing Organization:</strong> "+a.GoverningSocietyName.toString()+"</li>":"",o+=s+"<ul>"+c+t+n+"</ul></div></div></div>"}o+="</div></div></div>",$("#awards").removeClass("d-none"),$("#awards").append(o)}else $("#awards").append("<p class='text-danger border border-danger p-3'>No data returned!</p>"),$("#awards").removeClass("d-none");var p;if(0<i.Grants.length||0<i.Patents.length||0<i.ClinicalTrials){if(0<i.Grants.length){p="<div class='container'><div class='accordion pb-4' id='accordion-grants'><div class='accordion-item'>";for(let n=0;n<i.Grants.length;n++){let a=i.Grants[n];var e="<h5 class='accordion-header' id='heading-grants-"+n+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-grants-"+n+"'>Grant: "+a.GrantName.toString()+"</button></h5><div id='collapse-grants-"+n+"' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>",o="<li><strong>Duration:</strong> "+u(a.StartDate)+" - "+u(a.EndDate)+"</li>";let t=a.TotalDollars;p+=e+"<ul>"+o+(t=t?"<li><strong>Total Dollars:</strong> $"+t.toLocaleString("en-US",{style:"decimal",minimumFractionDigits:0}):"")+"</ul></div></div></div>"}}if(0<i.Patents.length)for(let o=0;o<i.Patents.length;o++){let a=i.Patents[o];var g="<h5 class='accordion-header' id='heading-patents-"+o+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-patents-"+o+"'>Patent: "+a.PatentName.toString()+"</button></h5><div id='collapse-patents-"+o+"' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";let t=a.PatentDate,n=(t=t?"<li><strong>Patent Approved:</strong> "+u(t):"",a.PatentNumber),e=(n=n?"<li><strong>Patent No:</strong> "+n.toString()+"</li>":"",a.PatentAbstract);e=e?"<li><strong>Patent Abstract:</strong> "+e.toString()+"</li>":"",p+=g+"<ul>"+t+n+e+"</ul></div></div></div>"}if(0<i.ClinicalTrials.length)for(let o=0;o<i.ClinicalTrials.length;o++){let a=i.ClinicalTrials[o];var b="<h5 class='accordion-header' id='heading-patents-"+o+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-patents-"+o+"'>Clinical Trial: "+a.ClinicalTrialTitle.toString()+"</button></h5><div id='collapse-patents-"+o+"' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";let t=a.StartDate,n=(t=t?"<li><strong>Duration:</strong> "+u(t)+" - "+u(a.EndDate):"",a.Source),e=(n=n?"<li><strong>Source:</strong> "+n.toString()+"</li>":"",a.Summary);e=e?"<li><strong>Summary:</strong> "+e.toString()+"</li>":"",p+=b+"<ul>"+t+n+e+"</ul></div></div></div>"}p+="</div></div></div>",$("#grants").removeClass("d-none"),$("#grants").append(p)}else $("#grants").append("<p class='text-danger border border-danger p-3'>No data returned!</p>"),$("#grants").removeClass("d-none");if(0<i.Presentations.length){let r="<div class='container pb-4'><div class='accordion' id='accordion-presentations'><div class='accordion-item'>";for(let s=0;s<i.Presentations.length;s++){let a=i.Presentations[s];var v="<h5 class='accordion-header' id='heading-presentations-"+s+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-presentations-"+s+"'>"+a.PresentationName.toString()+"</button></h5><div id='collapse-presentations-"+s+"' class='accordion-collapse collapse' data-bs-parent='#accordion-presentations'><div class='card-body'><div class='accordion-body-content'>";let t="",n=(t=a.Venue?"<li><strong>Venue:</strong> "+a.Venue.toString()+"</li>":"",""),e=(n=a.Sponsor?"<li><strong>Sponsor:</strong> "+a.Sponsor.toString()+"</li>":"",""),o=(e=a.Location?"<li><strong>Location:</strong> "+a.Location.toString()+"</li>":"","");o=a.Sponsor?"<li><strong>Presentation Date:</strong> "+u(a.PresentationDate)+"</li>":"",r+=v+"<ul>"+t+n+e+o+"</ul></div></div></div>"}r+="</div></div></div>",$("#presentations").removeClass("d-none"),$("#presentations").append(r)}else $("#presentations").append("<p class='text-danger border border-danger p-3'>No data returned!</p>"),$("#presentations").removeClass("d-none")}).fail(function(a){$("#publications").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#awards").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#presentations").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#grants").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#publications").removeClass("d-none"),$("#awards").removeClass("d-none"),$("#presentations").removeClass("d-none"),$("#grants").removeClass("d-none")}):($("#publications").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#awards").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#presentations").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#grants").append("<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"),$("#publications").removeClass("d-none"),$("#awards").removeClass("d-none"),$("#presentations").removeClass("d-none"),$("#grants").removeClass("d-none"))})});