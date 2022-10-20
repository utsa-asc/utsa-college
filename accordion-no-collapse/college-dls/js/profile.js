$(window).on("load",function(){console.log("faculty profile javascript loaded"),$(function(){function v(t){return"<div class='container pb-4'><div class='accordion' id='accordion-"+t+"'><div class='accordion-item'><p class='accordion-header' id='heading-"+t+"'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-"+t+"'>"}function S(t){return"</button></p><div id='collapse-"+t+"' class='accordion-collapse collapse'><div class='card-body'><div class='accordion-body-content'>"}var m="</div></div></div></div></div></div>";function b(t){return t=new Date(t),Intl.DateTimeFormat("en-US").format(t)}function P(){console.log("Invalid UUID!")}""!==$("#uuid").val()?$.ajax({type:"GET",url:"https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/"+$("#uuid").val()}).done(function(a){if(a===$("#uuid").val()+" not found")return P(),!1;a=JSON.parse(a);var t="Publications",n=v(t)+t+S(t);let r="";if(0<a.Articles.length){for(let l=0;l<a.Articles.length;l++){var i=a.Articles[l];r+="<ul><li><strong>"+i.ArticleTitle.toString()+"</strong></li>";let t="";t=i.JournalName?"<li><strong>Journal:</strong> "+i.JournalName.toString()+"</li>":"";var e=i.DOI;let n,o=(n=e?"<li><strong>DOI:</strong> <a href='"+(e="https://doi.org/"+e.toString())+"' blank='_blank'>"+e+"</a></li>":"","");o=i.Abstract?"<li><strong>Abstract:</strong> "+i.Abstract.toString()+"</li>":"",r+="<ul>"+t+n+o+"</ul></ul>"}r=n+r,r+=m,$("#publications").removeClass("d-none"),$("#publications").append(r)}else console.log("No data returned for publications!");n=v(t="Awards")+"Awards"+S(t);let l="";if(0<a.Awards.length){for(let o=0;o<a.Awards.length;o++){var s=a.Awards[o],g=(l+="<ul><li><strong>"+s.AwardName.toString()+"</strong></li>","<li><strong>Year Awarded:</strong> "+b(s.ReceivedDate.toString())+"</li>");let t=s.URL,n=(t=t?"<li><strong>URL:</strong> <a href='"+t+"' blank='_blank'>"+t+"</a></li>":"","");n=s.GoverningSocietyName?"<li><strong>Governing Organization:</strong> "+s.GoverningSocietyName.toString()+"</li>":"",l+="<ul>"+g+t+n+"</ul></ul>"}l=n+l,l+=m,$("#awards").removeClass("d-none"),$("#awards").append(l)}else console.log("No data returned for awards!");if(r,0<a.Grants.length||0<a.Patents.length||0<a.ClinicalTrials){grantsTitle=v(t="Grants")+"Grant, Patents, and Clinical Trials"+S(t);let r="";if(0<a.Grants.length)for(let n=0;n<a.Grants.length;n++){var o=a.Grants[n],c=(r+="<ul><li><strong>Grant: "+o.GrantName.toString()+"</strong></li>","<li><strong>Duration:</strong> "+b(o.StartDate)+" - "+b(o.EndDate)+"</li>");let t=o.TotalDollars;t=t?"<li><strong>Total Dollars:</strong> $"+t.toLocaleString("en-US",{style:"decimal",minimumFractionDigits:0}):"",r+="<ul>"+c+t+"</ul></ul>"}if(0<a.Patents.length)for(let l=0;l<a.Patents.length;l++){var d=a.Patents[l];r+="<ul><li><strong>Patent: "+d.PatentName.toString()+"</strong></li>";let t=d.PatentDate,n=(t=t?"<li><strong>Patent Approved:</strong> "+b(t):"",d.PatentNumber),o=(n=n?"<li><strong>Patent No:</strong> "+n.toString()+"</li>":"",d.PatentAbstract);o=o?"<li><strong>Patent Abstract:</strong> "+o.toString()+"</li>":"",r+="<ul>"+t+n+o+"</ul></ul>"}if(0<a.ClinicalTrials.length)for(let l=0;l<a.ClinicalTrials.length;l++){var u=a.ClinicalTrials[l];r+="<ul><li><strong>Clinical Trial: "+u.ClinicalTrialTitle.toString()+"</strong></li>";let t=u.StartDate,n=(t=t?"<li><strong>Duration:</strong> "+b(t)+" - "+b(u.EndDate):"",u.Source),o=(n=n?"<li><strong>Source:</strong> "+n.toString()+"</li>":"",u.Summary);o=o?"<li><strong>Summary:</strong> "+o.toString()+"</li>":"",r+="<ul>"+t+n+o+"</ul></ul>"}r=grantsTitle+r,r+=m,$("#grants").removeClass("d-none"),$("#grants").append(r)}else console.log("No data returned for grants, patents, and/or clinical trials!");n=v(t="Presentations")+t+S(t);let p="";if(0<a.Presentations.length){for(let r=0;r<a.Presentations.length;r++){var f=a.Presentations[r];p+="<ul><li><strong>"+f.PresentationName.toString()+"</strong></li>";let t="",n=(t=f.Venue?"<li><strong>Venue:</strong> "+f.Venue.toString()+"</li>":"",""),o=(n=f.Sponsor?"<li><strong>Sponsor:</strong> "+f.Sponsor.toString()+"</li>":"",""),l=(o=f.Location?"<li><strong>Location:</strong> "+f.Location.toString()+"</li>":"","");l=f.PresentationDate?"<li><strong>Presentation Date:</strong> "+b(f.PresentationDate)+"</li>":"",p+="<ul>"+t+n+o+l+"</ul></ul>"}p=n+p,p+=m,$("#presentations").removeClass("d-none"),$("#presentations").append(p)}else console.log("No data returned for presentations!")}).fail(function(t){P()}):P()})});